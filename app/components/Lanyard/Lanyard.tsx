// app/components/Lanyard/Lanyard.tsx
/* eslint-disable react/no-unknown-property */
"use client";
import { useEffect, useRef, useState } from "react";
import { Canvas, extend, useFrame, ThreeEvent } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
} from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";
import "./Lanyard.css";

const cardGLB = "/assets/Lanyard/card.glb";
const lanyard = "/assets/Lanyard/lanyard.png";

// Register the custom elements
extend({ MeshLineGeometry, MeshLineMaterial });

// Declare module to add types for JSX
declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: any;
    meshLineMaterial: any;
  }
}

export default function Lanyard({
  position = [0, 0, 30] as [number, number, number],
  gravity = [0, -40, 0] as [number, number, number],
  fov = 20,
  transparent = true,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className="lanyard-wrapper"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <Canvas
        camera={{
          position: position as [number, number, number],
          fov: fov,
        }}
        dpr={[1, isMobile ? 1 : 2]}
        gl={{ alpha: transparent, antialias: !isMobile }}
        style={{ width: "100%", height: "100%", display: "block" }}
        onCreated={({ gl }) =>
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)
        }
      >
        <ambientLight intensity={isMobile ? 0.8 : Math.PI} />
        <Physics
          gravity={gravity as [number, number, number]}
          timeStep={isMobile ? 1 / 30 : 1 / 60}
        >
          <Band isMobile={isMobile} />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={isMobile ? 1 : 2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={isMobile ? 1.5 : 3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={isMobile ? 1.5 : 3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={isMobile ? 5 : 10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({ maxSpeed = 50, minSpeed = 0, isMobile = false }) {
  const band = useRef<THREE.Mesh>(null);
  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  const card = useRef<any>(null);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps = {
    type: "dynamic" as const,
    canSleep: true,
    angularDamping: 4,
    linearDamping: 4,
  };

  const { nodes, materials } = useGLTF(cardGLB);
  const texture = useTexture(lanyard);

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ]),
  );

  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.5, 0],
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => void (document.body.style.cursor = "auto");
    }
  }, [hovered, dragged]);

  const handlePointerUp = (e: ThreeEvent<PointerEvent>) => {
    if (e.target) {
      (e.target as any).releasePointerCapture?.(e.pointerId);
    }
    drag(false);
  };

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    if (e.target) {
      (e.target as any).setPointerCapture?.(e.pointerId);
    }
    if (card.current) {
      drag(
        new THREE.Vector3()
          .copy(e.point)
          .sub(vec.copy(card.current.translation())),
      );
    }
  };

  useFrame((state, delta) => {
    if (dragged && card.current) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));

      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());

      card.current?.setNextKinematicTranslation({
        x: vec.x - (dragged as THREE.Vector3).x,
        y: vec.y - (dragged as THREE.Vector3).y,
        z: vec.z - (dragged as THREE.Vector3).z,
      });
    }

    if (fixed.current) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped)
          ref.current.lerped = new THREE.Vector3().copy(
            ref.current.translation(),
          );
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())),
        );
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)),
        );
      });

      if (
        j3.current &&
        j2.current &&
        j1.current &&
        fixed.current &&
        band.current
      ) {
        curve.points[0].copy(j3.current.translation());
        curve.points[1].copy(j2.current.lerped);
        curve.points[2].copy(j1.current.lerped);
        curve.points[3].copy(fixed.current.translation());

        (band.current.geometry as any).setPoints(
          curve.getPoints(isMobile ? 16 : 32),
        );

        if (card.current) {
          ang.copy(card.current.angvel());
          rot.copy(card.current.rotation());
          card.current.setAngvel({
            x: ang.x,
            y: ang.y - rot.y * 0.25,
            z: ang.z,
          });
        }
      }
    }
  });

  curve.curveType = "chordal";
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  const scaleFactor = isMobile ? 1.8 : 2.25;

  return (
    <>
      <group position={[0, isMobile ? 3 : 4, 0]}>
        <RigidBody ref={fixed} type="fixed" />

        <RigidBody
          position={[0.5, 0, 0]}
          ref={j1}
          {...segmentProps}
          colliders={false}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody
          position={[1, 0, 0]}
          ref={j2}
          {...segmentProps}
          colliders={false}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody
          position={[1.5, 0, 0]}
          ref={j3}
          {...segmentProps}
          colliders={false}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
          colliders={false}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={scaleFactor}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={handlePointerUp}
            onPointerDown={handlePointerDown}
          >
            <mesh geometry={(nodes as any).card.geometry}>
              <meshPhysicalMaterial
                map={(materials as any).base.map}
                map-anisotropy={16}
                clearcoat={isMobile ? 0.5 : 1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh
              geometry={(nodes as any).clip.geometry}
              material={(materials as any).metal}
              material-roughness={0.3}
            />
            <mesh
              geometry={(nodes as any).clamp.geometry}
              material={(materials as any).metal}
            />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isMobile ? [800, 1600] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={isMobile ? 0.8 : 1}
        />
      </mesh>
    </>
  );
}
