/* eslint-disable react/prop-types */
import { useRef } from 'react'
import { useGLTF, useVideoTexture } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const DemoLaptop = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/laptop.glb')

  const txt = useVideoTexture(props.texture ? props.texture : "/textures/project/project1.mp4")

  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: 'power3.out'
    })
  }, [txt])


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="image_monitor001_0"
                position={[0.004, 1.209, -1.15]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={0.167}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.image}
                >
                  <meshBasicMaterial map={txt} />
                </mesh>
              </group>
              <group name="image_monitor_anim_1" scale={0.167}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.image}
                />
              </group>
              <group
                name="add006_2"
                position={[-1.178, -0.059, -0.869]}
                rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group
                name="gear009_3"
                position={[-1.29, -0.059, -0.869]}
                rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="audio_4">
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="audio002_5" position={[2.435, 0, 0]}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group
                name="big_bolt001_6"
                position={[-1.503, -0.057, -0.757]}
                rotation={[-0.759, 0, Math.PI / 2]}>
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="big_bolt002_7" position={[-0.001, 0.128, -1.105]}>
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group
                name="big_bolt003_8"
                position={[1.504, -0.057, -0.757]}
                rotation={[0.759, 0, -Math.PI / 2]}>
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="big_bolt004_9" position={[-0.001, 0.128, -1.105]}>
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group
                name="big_bolt008_10"
                position={[1.105, -0.303, 0.589]}
                rotation={[0, -0.759, Math.PI]}>
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group
                name="big_bolt005_11"
                position={[-1.083, -0.303, 0.589]}
                rotation={[0, -0.759, Math.PI]}>
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group
                name="big_bolt006_12"
                position={[1.105, -0.303, -0.594]}
                rotation={[0, -0.759, Math.PI]}>
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group
                name="big_bolt007_13"
                position={[-1.083, -0.303, -0.594]}
                rotation={[0, -0.759, Math.PI]}>
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="Cube070_14" position={[0.524, -0.031, 0.731]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube071_15" position={[0.505, -0.028, 0.731]}>
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube116_16"
                position={[0, 0.259, -0.673]}
                rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube117_17"
                position={[0, 0.259, -0.673]}
                rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube072_18" position={[-0.48, -0.031, 0.731]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube073_19" position={[-0.499, -0.028, 0.731]}>
                <mesh
                  name="Object_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="btn_20" position={[2.141, -0.037, 1.278]} rotation={[0, -0.436, 0]}>
                <mesh
                  name="Object_44"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_44.geometry}
                  material={materials.mat_lumball}
                />
              </group>
              <group
                name="btn_shaft_21"
                position={[2.425, -0.037, 0.668]}
                rotation={[0, -0.436, 0]}>
                <mesh
                  name="Object_46"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_46.geometry}
                  material={materials.mat_lumball}
                />
              </group>
              <group name="Cylinder058_22" position={[0.361, -0.027, 0.007]}>
                <mesh
                  name="Object_48"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_48.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cylinder001_23" position={[-0.394, -0.027, 0.007]}>
                <mesh
                  name="Object_50"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_50.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cylinder068_24" position={[0.359, -0.027, 0.913]}>
                <mesh
                  name="Object_52"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cylinder069_25" position={[-0.359, -0.027, 0.913]}>
                <mesh
                  name="Object_54"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_54.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="1_uv_cadence_26" position={[0, 0.002, 0.598]}>
                <mesh
                  name="Object_56"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_56.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="cadence001_27" position={[0, 0.002, 0.202]}>
                <mesh
                  name="Object_58"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_58.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group
                name="Cube089_28"
                position={[-0.001, -1.228, -1.105]}
                rotation={[Math.PI, -Math.PI / 2, 0]}>
                <mesh
                  name="Object_60"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_60.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group
                name="1_uv_Cube026_29"
                position={[-0.001, 0.005, -1.105]}
                rotation={[Math.PI, -Math.PI / 2, 0]}>
                <mesh
                  name="Object_62"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_62.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group
                name="canvas_30"
                position={[0.003, 0.018, -2.197]}
                rotation={[0, -Math.PI / 2, 0]}>
                <mesh
                  name="Object_64"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_64.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group
                name="canvas_count_31"
                position={[0.003, 0.018, -2.197]}
                rotation={[0, -Math.PI / 2, 0]}>
                <mesh
                  name="Object_66"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group
                name="top_case_conector_32"
                position={[-0.001, 0.128, -1.105]}
                rotation={[1.658, 0, 0]}>
                <mesh
                  name="Object_68"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_68.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group
                name="top_case_conector001_33"
                position={[-0.001, 0.128, -1.105]}
                rotation={[1.658, 0, 0]}>
                <mesh
                  name="Object_70"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_70.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group
                name="top_case_conector_cylinder_34"
                position={[-0.001, 0.128, -1.105]}
                rotation={[0.087, 0, 0]}>
                <mesh
                  name="Object_72"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_72.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="top_case_conector_cylinder001_35" position={[-0.003, 0.128, -1.105]}>
                <mesh
                  name="Object_74"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_74.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="back_side_sace_conect_36" position={[-0.001, 0.128, -1.105]}>
                <mesh
                  name="Object_76"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_76.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="lock_base_37" position={[-0.001, 0.145, -1.105]}>
                <mesh
                  name="Object_78"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_78.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="lock_plane_38" position={[-0.001, 0.147, -1.105]}>
                <mesh
                  name="Object_80"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_80.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group
                name="top_case_locker_39"
                position={[-0.001, 0.128, -1.105]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_82"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_82.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="lock_border_40" position={[-0.001, 0.128, -1.105]}>
                <mesh
                  name="Object_84"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_84.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="bottom_locker_gear_41" position={[-0.001, -0.082, 1.289]}>
                <mesh
                  name="Object_86"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_86.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="cpu_case_42" position={[0, -0.036, -0.673]}>
                <mesh
                  name="Object_88"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_88.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="side_cpu_border_plate_43" position={[0, -0.036, -0.673]}>
                <mesh
                  name="Object_90"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_90.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="cable_cpu_conector_plate_44" position={[0, -0.036, -0.673]}>
                <mesh
                  name="Object_92"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_92.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="top_clips_45" position={[0, -0.031, -0.673]}>
                <mesh
                  name="Object_94"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_94.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="cpu_top_label_46" position={[0, 0.259, -0.673]}>
                <mesh
                  name="Object_96"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_96.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="cpu_bolt_47" position={[0, 0.259, -0.673]}>
                <mesh
                  name="Object_98"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_98.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="Cube101_48" position={[0, 0.259, -0.673]}>
                <mesh
                  name="Object_100"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_100.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="Cube102_49" position={[0, 0.259, -0.673]}>
                <mesh
                  name="Object_102"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_102.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="Cube103_50" position={[0, 0.259, -0.673]}>
                <mesh
                  name="Object_104"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_104.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="cable002_51" position={[0, 0.259, -0.673]}>
                <mesh
                  name="Object_106"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_106.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="cable_52" position={[0, 0.259, -0.673]}>
                <mesh
                  name="Object_108"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_108.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="cable001_53" position={[0, 0.259, -0.673]}>
                <mesh
                  name="Object_110"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_110.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="fan_border_54">
                <mesh
                  name="Object_112"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_112.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="back_set_fan001_55" rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh
                  name="Object_114"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_114.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="fan_magnit001_56">
                <mesh
                  name="Object_116"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_116.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="gears001_57" position={[-0.001, 0.128, -1.105]} rotation={[0.087, 0, 0]}>
                <mesh
                  name="Object_118"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_118.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="gears002_58" position={[-0.001, 0.128, -1.105]} rotation={[0.087, 0, 0]}>
                <mesh
                  name="Object_120"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_120.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="gears003_59" position={[-0.001, 0.128, -1.105]} rotation={[0.087, 0, 0]}>
                <mesh
                  name="Object_122"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_122.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group
                name="gear_based_60"
                position={[2.425, -0.037, 0.668]}
                rotation={[0, -0.436, 0]}>
                <mesh
                  name="Object_124"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_124.geometry}
                  material={materials.mat_lumball}
                />
              </group>
              <group
                name="gear_conect_61"
                position={[2.425, -0.037, 0.668]}
                rotation={[0, -0.436, 0]}>
                <mesh
                  name="Object_126"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_126.geometry}
                  material={materials.mat_lumball}
                />
              </group>
              <group
                name="gear_conect001_62"
                position={[2.425, -0.037, 0.668]}
                rotation={[0, 1.134, 0]}>
                <mesh
                  name="Object_128"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_128.geometry}
                  material={materials.mat_lumball}
                />
              </group>
              <group
                name="1_uv_gear_body_63"
                position={[2.425, -0.037, 0.668]}
                rotation={[0, -0.436, 0]}>
                <mesh
                  name="Object_130"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_130.geometry}
                  material={materials.mat_lumball}
                />
              </group>
              <group
                name="gear_body001_64"
                position={[2.425, -0.037, 0.668]}
                rotation={[0, 1.134, 0]}>
                <mesh
                  name="Object_132"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_132.geometry}
                  material={materials.mat_lumball}
                />
              </group>
              <group name="cpu_gear001_65" position={[-0.127, -0.088, -0.623]}>
                <mesh
                  name="Object_134"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_134.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="cpu_gear002_66" position={[-0.192, -0.088, -0.623]}>
                <mesh
                  name="Object_136"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_136.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="cpu_gear003_67" position={[-0.127, -0.088, -0.745]}>
                <mesh
                  name="Object_138"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_138.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="cpu_gear004_68" position={[-0.192, -0.088, -0.745]}>
                <mesh
                  name="Object_140"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_140.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="cpu_gear005_69" position={[-0.085, -0.104, -0.68]} scale={0.696}>
                <mesh
                  name="Object_142"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_142.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group
                name="cpu_gear006_70"
                position={[-0.161, -0.064, -0.684]}
                scale={[1.496, 1, 1.496]}>
                <mesh
                  name="Object_144"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_144.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="cpu_gear007_71" position={[-0.228, -0.104, -0.68]} scale={0.696}>
                <mesh
                  name="Object_146"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_146.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="cpu_gear008_72" position={[0.182, -0.088, -0.623]}>
                <mesh
                  name="Object_148"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_148.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="cpu_gear009_73" position={[0.116, -0.088, -0.623]}>
                <mesh
                  name="Object_150"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_150.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="cpu_gear010_74" position={[0.182, -0.088, -0.745]}>
                <mesh
                  name="Object_152"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_152.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="cpu_gear011_75" position={[0.116, -0.088, -0.745]}>
                <mesh
                  name="Object_154"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_154.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="cpu_gear012_76" position={[0.223, -0.104, -0.68]} scale={0.696}>
                <mesh
                  name="Object_156"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_156.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group
                name="cpu_gear013_77"
                position={[0.148, -0.064, -0.684]}
                scale={[1.496, 1, 1.496]}>
                <mesh
                  name="Object_158"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_158.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="cpu_gear014_78" position={[0.08, -0.104, -0.68]} scale={0.696}>
                <mesh
                  name="Object_160"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_160.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="Cube092_79" position={[2.425, -0.037, 0.668]} rotation={[0, -0.436, 0]}>
                <mesh
                  name="Object_162"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_162.geometry}
                  material={materials.mat_lumball}
                />
              </group>
              <group name="Cube093_80" position={[2.425, -0.037, 0.668]} rotation={[0, -0.436, 0]}>
                <mesh
                  name="Object_164"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_164.geometry}
                  material={materials.mat_lumball}
                />
              </group>
              <group name="keykup051_81" position={[-0.643, 0.106, 0.317]}>
                <mesh
                  name="Object_166"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_166.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup052_82" position={[-0.517, 0.106, 0.317]}>
                <mesh
                  name="Object_168"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_168.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup053_83" position={[-0.392, 0.106, 0.317]}>
                <mesh
                  name="Object_170"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_170.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup054_84" position={[-0.266, 0.106, 0.317]}>
                <mesh
                  name="Object_172"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_172.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup055_85" position={[-0.14, 0.106, 0.317]}>
                <mesh
                  name="Object_174"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_174.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup056_86" position={[-0.015, 0.106, 0.317]}>
                <mesh
                  name="Object_176"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_176.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup057_87" position={[0.111, 0.106, 0.317]}>
                <mesh
                  name="Object_178"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_178.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup058_88" position={[0.237, 0.106, 0.317]}>
                <mesh
                  name="Object_180"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_180.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup059_89" position={[0.362, 0.106, 0.317]}>
                <mesh
                  name="Object_182"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_182.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup060_90" position={[0.488, 0.106, 0.317]}>
                <mesh
                  name="Object_184"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_184.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup061_91" position={[0.614, 0.106, 0.317]}>
                <mesh
                  name="Object_186"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_186.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup062_92" position={[-0.607, 0.098, 0.469]}>
                <mesh
                  name="Object_188"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_188.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup063_93" position={[-0.481, 0.098, 0.469]}>
                <mesh
                  name="Object_190"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_190.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup064_94" position={[-0.356, 0.098, 0.469]}>
                <mesh
                  name="Object_192"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_192.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup065_95" position={[-0.23, 0.098, 0.469]}>
                <mesh
                  name="Object_194"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_194.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup066_96" position={[-0.104, 0.098, 0.469]}>
                <mesh
                  name="Object_196"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_196.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup067_97" position={[0.021, 0.098, 0.469]}>
                <mesh
                  name="Object_198"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_198.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup068_98" position={[0.147, 0.098, 0.469]}>
                <mesh
                  name="Object_200"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_200.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup069_99" position={[0.273, 0.098, 0.469]}>
                <mesh
                  name="Object_202"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_202.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup070_100" position={[0.398, 0.098, 0.469]}>
                <mesh
                  name="Object_204"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_204.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup071_101" position={[0.524, 0.098, 0.469]}>
                <mesh
                  name="Object_206"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_206.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup072_102" position={[0.65, 0.098, 0.469]}>
                <mesh
                  name="Object_208"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_208.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup073_103" position={[-0.551, 0.086, 0.617]}>
                <mesh
                  name="Object_210"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_210.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup074_104" position={[-0.426, 0.086, 0.617]}>
                <mesh
                  name="Object_212"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_212.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup075_105" position={[-0.3, 0.086, 0.617]}>
                <mesh
                  name="Object_214"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_214.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup076_106" position={[-0.174, 0.086, 0.617]}>
                <mesh
                  name="Object_216"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_216.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup077_107" position={[-0.049, 0.086, 0.617]}>
                <mesh
                  name="Object_218"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_218.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup078_108" position={[0.077, 0.086, 0.617]}>
                <mesh
                  name="Object_220"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_220.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup079_109" position={[0.203, 0.086, 0.617]}>
                <mesh
                  name="Object_222"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_222.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup080_110" position={[0.328, 0.086, 0.617]}>
                <mesh
                  name="Object_224"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_224.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup081_111" position={[0.454, 0.086, 0.617]}>
                <mesh
                  name="Object_226"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_226.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup082_112" position={[0.58, 0.086, 0.617]}>
                <mesh
                  name="Object_228"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_228.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup083_113" position={[0.762, 0.086, 0.617]}>
                <mesh
                  name="Object_230"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_230.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup084_114" position={[-0.725, 0.086, 0.617]}>
                <mesh
                  name="Object_232"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_232.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup085_115" position={[-0.757, 0.098, 0.469]}>
                <mesh
                  name="Object_234"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_234.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup086_116" position={[-0.782, 0.106, 0.317]}>
                <mesh
                  name="Object_236"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_236.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup087_117" position={[-0.701, 0.115, 0.156]}>
                <mesh
                  name="Object_238"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_238.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup088_118" position={[-0.576, 0.115, 0.156]}>
                <mesh
                  name="Object_240"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_240.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup089_119" position={[-0.45, 0.115, 0.156]}>
                <mesh
                  name="Object_242"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_242.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup090_120" position={[-0.324, 0.115, 0.156]}>
                <mesh
                  name="Object_244"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_244.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup091_121" position={[-0.199, 0.115, 0.156]}>
                <mesh
                  name="Object_246"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_246.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup092_122" position={[-0.073, 0.115, 0.156]}>
                <mesh
                  name="Object_248"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_248.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup093_123" position={[0.053, 0.115, 0.156]}>
                <mesh
                  name="Object_250"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_250.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup094_124" position={[0.178, 0.115, 0.156]}>
                <mesh
                  name="Object_252"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_252.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup095_125" position={[0.304, 0.115, 0.156]}>
                <mesh
                  name="Object_254"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_254.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup096_126" position={[0.43, 0.115, 0.156]}>
                <mesh
                  name="Object_256"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_256.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup097_127" position={[0.555, 0.115, 0.156]}>
                <mesh
                  name="Object_258"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_258.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup098_128" position={[0.69, 0.115, 0.156]}>
                <mesh
                  name="Object_260"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_260.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup099_129" position={[0.77, 0.106, 0.317]}>
                <mesh
                  name="Object_262"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_262.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="keykup100_130" position={[0.015, 0.069, 0.78]}>
                <mesh
                  name="Object_264"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_264.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="1_uv_fan001_131" position={[-1.121, -0.059, -0.424]}>
                <mesh
                  name="Object_266"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_266.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="fan002_132" position={[1.123, -0.059, -0.424]}>
                <mesh
                  name="Object_268"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_268.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="rays_133">
                <mesh
                  name="Object_270"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_270.geometry}
                  material={materials.rays}
                />
              </group>
              <group name="rays_anim_134">
                <mesh
                  name="Object_272"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_272.geometry}
                  material={materials.rays}
                />
              </group>
              <group name="Cube003_135" position={[0.478, -0.028, 0.265]}>
                <mesh
                  name="Object_274"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_274.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube004_136" position={[0.354, -0.028, 0.265]}>
                <mesh
                  name="Object_276"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_276.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube005_137" position={[0.228, -0.028, 0.265]}>
                <mesh
                  name="Object_278"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_278.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube006_138" position={[0.102, -0.028, 0.265]}>
                <mesh
                  name="Object_280"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_280.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube007_139" position={[-0.025, -0.028, 0.265]}>
                <mesh
                  name="Object_282"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_282.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube008_140" position={[-0.152, -0.028, 0.265]}>
                <mesh
                  name="Object_284"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_284.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube009_141" position={[-0.277, -0.028, 0.265]}>
                <mesh
                  name="Object_286"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_286.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube010_142" position={[-0.404, -0.028, 0.265]}>
                <mesh
                  name="Object_288"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_288.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube011_143" position={[-0.528, -0.028, 0.265]}>
                <mesh
                  name="Object_290"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_290.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube012_144" position={[-0.654, -0.028, 0.265]}>
                <mesh
                  name="Object_292"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_292.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube014_145"
                position={[0.369, -0.031, 0.265]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_294"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_294.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube015_146"
                position={[0.244, -0.031, 0.265]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_296"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_296.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube016_147"
                position={[0.119, -0.031, 0.265]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_298"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_298.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube017_148"
                position={[-0.009, -0.031, 0.265]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_300"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_300.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube018_149"
                position={[-0.135, -0.031, 0.265]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_302"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_302.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube019_150"
                position={[-0.261, -0.031, 0.265]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_304"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_304.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube020_151"
                position={[-0.386, -0.031, 0.265]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_306"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_306.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube021_152"
                position={[-0.513, -0.031, 0.265]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_308"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_308.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube022_153"
                position={[-0.637, -0.031, 0.265]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_310"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_310.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube023_154" position={[0.62, -0.031, 0.265]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_312"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_312.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube024_155" position={[0.741, -0.028, 0.265]}>
                <mesh
                  name="Object_314"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_314.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube075_156"
                position={[-0.764, -0.031, 0.265]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_316"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_316.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube002_157" position={[0.603, -0.028, 0.265]}>
                <mesh
                  name="Object_318"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_318.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube013_158"
                position={[0.494, -0.031, 0.265]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_320"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_320.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube025_159" position={[0.528, -0.028, 0.428]}>
                <mesh
                  name="Object_322"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_322.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube026_160"
                position={[0.419, -0.031, 0.428]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_324"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_324.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube029_161" position={[0.403, -0.028, 0.428]}>
                <mesh
                  name="Object_326"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_326.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube030_162"
                position={[0.294, -0.031, 0.428]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_328"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_328.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube031_163" position={[0.278, -0.028, 0.428]}>
                <mesh
                  name="Object_330"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_330.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube032_164"
                position={[0.169, -0.031, 0.428]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_332"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_332.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube033_165" position={[0.153, -0.028, 0.428]}>
                <mesh
                  name="Object_334"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_334.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube034_166"
                position={[0.044, -0.031, 0.428]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_336"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_336.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube035_167" position={[0.026, -0.028, 0.428]}>
                <mesh
                  name="Object_338"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_338.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube036_168"
                position={[-0.083, -0.031, 0.428]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_340"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_340.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube037_169" position={[-0.101, -0.028, 0.428]}>
                <mesh
                  name="Object_342"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_342.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube038_170"
                position={[-0.21, -0.031, 0.428]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_344"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_344.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube039_171" position={[-0.227, -0.028, 0.428]}>
                <mesh
                  name="Object_346"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_346.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube040_172"
                position={[-0.336, -0.031, 0.428]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_348"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_348.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube041_173" position={[-0.353, -0.028, 0.428]}>
                <mesh
                  name="Object_350"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_350.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube042_174"
                position={[-0.462, -0.031, 0.428]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_352"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_352.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube043_175" position={[-0.477, -0.028, 0.428]}>
                <mesh
                  name="Object_354"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_354.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube044_176"
                position={[-0.586, -0.031, 0.428]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_356"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_356.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube045_177" position={[-0.604, -0.028, 0.428]}>
                <mesh
                  name="Object_358"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_358.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube046_178"
                position={[-0.713, -0.031, 0.428]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_360"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_360.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube068_179"
                position={[0.654, -0.031, 0.428]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_362"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_362.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube074_180" position={[-0.752, -0.028, 0.428]}>
                <mesh
                  name="Object_364"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_364.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube027_181" position={[0.652, -0.028, 0.428]}>
                <mesh
                  name="Object_366"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_366.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube028_182"
                position={[0.543, -0.031, 0.428]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_368"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_368.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube047_183" position={[0.445, -0.028, 0.576]}>
                <mesh
                  name="Object_370"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_370.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube048_184" position={[0.46, -0.031, 0.576]} rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_372"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_372.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube049_185" position={[0.319, -0.028, 0.576]}>
                <mesh
                  name="Object_374"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_374.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube050_186"
                position={[0.335, -0.031, 0.576]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_376"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_376.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube051_187" position={[0.193, -0.028, 0.576]}>
                <mesh
                  name="Object_378"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_378.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube052_188"
                position={[0.209, -0.031, 0.576]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_380"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_380.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube053_189" position={[0.067, -0.028, 0.576]}>
                <mesh
                  name="Object_382"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_382.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube054_190"
                position={[0.083, -0.031, 0.576]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_384"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_384.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube055_191" position={[-0.058, -0.028, 0.576]}>
                <mesh
                  name="Object_386"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_386.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube056_192"
                position={[-0.042, -0.031, 0.576]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_388"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_388.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube057_193" position={[-0.184, -0.028, 0.576]}>
                <mesh
                  name="Object_390"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_390.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube058_194"
                position={[-0.168, -0.031, 0.576]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_392"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_392.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube059_195" position={[-0.31, -0.028, 0.576]}>
                <mesh
                  name="Object_394"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_394.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube060_196"
                position={[-0.294, -0.031, 0.576]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_396"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_396.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube061_197" position={[-0.435, -0.028, 0.576]}>
                <mesh
                  name="Object_398"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_398.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube062_198"
                position={[-0.42, -0.031, 0.576]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_400"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_400.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube063_199" position={[-0.561, -0.028, 0.576]}>
                <mesh
                  name="Object_402"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_402.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube064_200"
                position={[-0.545, -0.031, 0.576]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_404"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_404.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube065_201"
                position={[-0.671, -0.031, 0.576]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_406"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_406.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube069_202" position={[0.696, -0.028, 0.576]}>
                <mesh
                  name="Object_408"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_408.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube066_203" position={[0.57, -0.028, 0.576]}>
                <mesh
                  name="Object_410"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_410.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cube067_204"
                position={[0.586, -0.031, 0.576]}
                rotation={[0, 0, Math.PI]}>
                <mesh
                  name="Object_412"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_412.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube076_205" position={[-0.721, -0.028, 0.574]}>
                <mesh
                  name="Object_414"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_414.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Circle_206"
                position={[0, 1.402, -1.259]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_416"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_416.geometry}
                  material={materials.mat_emis}
                />
              </group>
              <group
                name="lumen_64002_207"
                position={[-0.053, 1.396, -1.25]}
                rotation={[Math.PI / 2, 0, -Math.PI]}>
                <mesh
                  name="Object_418"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_418.geometry}
                  material={materials.mat_emis}
                />
              </group>
              <group
                name="lumball_body_208"
                position={[2.425, -0.037, 0.668]}
                rotation={[0, -0.436, 0]}>
                <mesh
                  name="Object_420"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_420.geometry}
                  material={materials.mat_lumball}
                />
              </group>
              <group
                name="ball_209"
                position={[2.425, -0.054, 0.668]}
                rotation={[Math.PI, 0.436, 0]}>
                <mesh
                  name="Object_422"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_422.geometry}
                  material={materials.mat_lumball}
                />
              </group>
              <group
                name="lumball_plate_210"
                position={[2.425, -0.037, 0.668]}
                rotation={[0, -0.436, 0]}>
                <mesh
                  name="Object_424"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_424.geometry}
                  material={materials.mat_lumball}
                />
              </group>
              <group
                name="cable_conector_211"
                position={[2.607, -0.037, 0.278]}
                rotation={[0, -0.436, 0]}>
                <mesh
                  name="Object_426"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_426.geometry}
                  material={materials.mat_lumball}
                />
              </group>
              <group
                name="btn_conector_212"
                position={[2.425, -0.037, 0.668]}
                rotation={[0, -0.436, 0]}>
                <mesh
                  name="Object_428"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_428.geometry}
                  material={materials.mat_lumball}
                />
              </group>
              <group
                name="mini_bolt030_213"
                position={[2.214, -0.012, 0.878]}
                rotation={[0.567, -0.375, 0.229]}>
                <mesh
                  name="Object_430"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_430.geometry}
                  material={materials.mat_lumball}
                />
              </group>
              <group
                name="mini_bolt031_214"
                position={[2.4, -0.012, 0.964]}
                rotation={[0.567, -0.375, 0.229]}>
                <mesh
                  name="Object_432"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_432.geometry}
                  material={materials.mat_lumball}
                />
              </group>
              <group
                name="mini_bolt032_215"
                position={[2.631, -0.166, 0.997]}
                rotation={[0, -0.436, -Math.PI / 2]}>
                <mesh
                  name="Object_434"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_434.geometry}
                  material={materials.mat_lumball}
                />
              </group>
              <group
                name="mini_bolt033_216"
                position={[2.812, -0.166, 0.608]}
                rotation={[0, -0.436, -Math.PI / 2]}>
                <mesh
                  name="Object_436"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_436.geometry}
                  material={materials.mat_lumball}
                />
              </group>
              <group
                name="mini_bolt034_217"
                position={[2.223, -0.166, 0.34]}
                rotation={[-Math.PI, 0.436, Math.PI / 2]}>
                <mesh
                  name="Object_438"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_438.geometry}
                  material={materials.mat_lumball}
                />
              </group>
              <group
                name="mini_bolt035_218"
                position={[2.04, -0.166, 0.727]}
                rotation={[-Math.PI, 0.436, Math.PI / 2]}>
                <mesh
                  name="Object_440"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_440.geometry}
                  material={materials.mat_lumball}
                />
              </group>
              <group name="bottom_case_219">
                <mesh
                  name="Object_442"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_442.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="handler_conect_220" position={[-0.001, 0.128, -1.105]}>
                <mesh
                  name="Object_444"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_444.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group
                name="handler_221"
                position={[-0.002, 2.287, -1.019]}
                rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh
                  name="Object_446"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_446.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="audio_border_222">
                <mesh
                  name="Object_448"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_448.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group
                name="top_case_223"
                position={[-0.001, 0.128, -1.105]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_450"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_450.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group
                name="logo_border_224"
                position={[-0.001, 0.128, -1.105]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_452"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_452.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="side_border_225" position={[1.485, -0.081, 0.217]}>
                <mesh
                  name="Object_454"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_454.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="bottom_podium_226">
                <mesh
                  name="Object_456"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_456.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="power_input_plate_227" position={[0, 0, -1.907]}>
                <mesh
                  name="Object_458"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_458.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group
                name="power_imput_conector_228"
                position={[0, 0, -1.156]}
                rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_460"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_460.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group
                name="power_input_border_229"
                position={[0, -0.106, -1.082]}
                rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_462"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_462.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group
                name="1_uv_electrod_230"
                position={[-1.138, -0.059, -0.869]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="Object_464"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_464.geometry}
                  material={materials.mat_emis}
                />
              </group>
              <group
                name="electrod002_231"
                position={[1.143, -0.059, -0.869]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="Object_466"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_466.geometry}
                  material={materials.mat_emis}
                />
              </group>
              <group
                name="electrod001_232"
                position={[-1.138, -0.059, -0.635]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
                <mesh
                  name="Object_468"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_468.geometry}
                  material={materials.mat_emis}
                />
              </group>
              <group
                name="electrod003_233"
                position={[1.143, -0.059, -0.635]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                <mesh
                  name="Object_470"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_470.geometry}
                  material={materials.mat_emis}
                />
              </group>
              <group name="camera_emis_234" rotation={[0.001, 0.045, -1.629]}>
                <mesh
                  name="Object_472"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_472.geometry}
                  material={materials.mat_emis}
                />
              </group>
              <group name="Tube_top_glass_235">
                <mesh
                  name="Object_474"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_474.geometry}
                  material={materials.glass}
                />
              </group>
              <group name="logo_glass_236" position={[-0.001, 1.402, -1.266]}>
                <mesh
                  name="Object_476"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_476.geometry}
                  material={materials.glass}
                />
              </group>
              <group name="cpu_glass_237" position={[0, -0.036, -0.673]}>
                <mesh
                  name="Object_478"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_478.geometry}
                  material={materials.glass}
                />
              </group>
              <group
                name="camera_lins_238"
                position={[0, -0.022, -0.164]}
                rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="Object_480"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_480.geometry}
                  material={materials.glass}
                />
              </group>
              <group name="1_uv_port_1003_239" position={[1.537, -0.063, 0.147]}>
                <mesh
                  name="Object_482"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_482.geometry}
                  material={materials.mat_lumball}
                />
              </group>
              <group name="BezierCurve_240" position={[3, -0.089, 0.115]}>
                <mesh
                  name="Object_484"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_484.geometry}
                  material={materials.mat_lumball}
                />
              </group>
              <group
                name="1_uv_Cylinder_241"
                position={[0.69, -0.036, 0.156]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_486"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_486.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder006_242"
                position={[0.554, -0.036, 0.156]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_488"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_488.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder007_243"
                position={[0.429, -0.036, 0.156]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_490"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_490.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder008_244"
                position={[0.304, -0.036, 0.156]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_492"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_492.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder009_245"
                position={[0.179, -0.036, 0.156]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_494"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_494.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder010_246"
                position={[0.054, -0.036, 0.156]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_496"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_496.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder011_247"
                position={[-0.073, -0.036, 0.156]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_498"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_498.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder012_248"
                position={[-0.199, -0.036, 0.156]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_500"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_500.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder013_249"
                position={[-0.325, -0.036, 0.156]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_502"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_502.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder014_250"
                position={[-0.451, -0.036, 0.156]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_504"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_504.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder015_251"
                position={[-0.576, -0.036, 0.156]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_506"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_506.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder016_252"
                position={[-0.701, -0.036, 0.156]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_508"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_508.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder017_253"
                position={[0.612, -0.036, 0.317]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_510"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_510.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder018_254"
                position={[0.487, -0.036, 0.317]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_512"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_512.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder019_255"
                position={[0.362, -0.036, 0.317]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_514"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_514.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder020_256"
                position={[0.236, -0.036, 0.317]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_516"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_516.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder021_257"
                position={[0.111, -0.036, 0.317]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_518"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_518.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder022_258"
                position={[-0.016, -0.036, 0.317]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_520"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_520.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder023_259"
                position={[-0.142, -0.036, 0.317]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_522"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_522.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder024_260"
                position={[-0.267, -0.036, 0.317]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_524"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_524.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder025_261"
                position={[-0.393, -0.036, 0.317]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_526"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_526.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder026_262"
                position={[-0.518, -0.036, 0.317]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_528"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_528.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder027_263"
                position={[-0.644, -0.036, 0.317]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_530"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_530.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder028_264"
                position={[0.772, -0.036, 0.317]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_532"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_532.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder029_265"
                position={[-0.784, -0.036, 0.317]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_534"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_534.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder030_266"
                position={[0.647, -0.036, 0.47]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_536"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_536.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder031_267"
                position={[0.522, -0.036, 0.47]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_538"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_538.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder032_268"
                position={[0.397, -0.036, 0.47]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_540"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_540.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder033_269"
                position={[0.271, -0.036, 0.47]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_542"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_542.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder034_270"
                position={[0.146, -0.036, 0.47]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_544"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_544.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder035_271"
                position={[0.019, -0.036, 0.47]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_546"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_546.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder036_272"
                position={[-0.107, -0.036, 0.47]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_548"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_548.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder037_273"
                position={[-0.232, -0.036, 0.47]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_550"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_550.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder038_274"
                position={[-0.358, -0.036, 0.47]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_552"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_552.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder039_275"
                position={[-0.483, -0.036, 0.47]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_554"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_554.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder040_276"
                position={[-0.609, -0.036, 0.47]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_556"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_556.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder041_277"
                position={[0.762, -0.036, 0.616]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_558"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_558.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder042_278"
                position={[0.577, -0.036, 0.616]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_560"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_560.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder043_279"
                position={[0.452, -0.036, 0.616]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_562"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_562.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder044_280"
                position={[0.327, -0.036, 0.616]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_564"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_564.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder045_281"
                position={[0.202, -0.036, 0.616]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_566"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_566.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder046_282"
                position={[0.075, -0.036, 0.616]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_568"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_568.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder047_283"
                position={[-0.051, -0.036, 0.616]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_570"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_570.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder048_284"
                position={[-0.177, -0.036, 0.616]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_572"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_572.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder049_285"
                position={[-0.303, -0.036, 0.616]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_574"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_574.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder050_286"
                position={[-0.428, -0.036, 0.616]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_576"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_576.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder051_287"
                position={[-0.553, -0.036, 0.616]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_578"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_578.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder052_288"
                position={[-0.758, -0.036, 0.47]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_580"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_580.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder053_289"
                position={[-0.727, -0.036, 0.616]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_582"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_582.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder054_290"
                position={[-0.511, -0.036, 0.781]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_584"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_584.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder055_291"
                position={[0.513, -0.036, 0.781]}
                rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_586"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_586.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="mini_bolt_292" position={[-1.411, 0.133, -0.758]}>
                <mesh
                  name="Object_588"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_588.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt001_293" position={[0.62, 0.099, -0.851]}>
                <mesh
                  name="Object_590"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_590.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt002_294" position={[0.62, 0.099, -0.476]}>
                <mesh
                  name="Object_592"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_592.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt003_295" position={[0.627, 0.099, -0.633]}>
                <mesh
                  name="Object_594"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_594.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt004_296" position={[0.627, 0.099, -0.696]}>
                <mesh
                  name="Object_596"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_596.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group
                name="mini_bolt005_297"
                position={[0.792, -0.026, -0.56]}
                rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh
                  name="Object_598"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_598.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group
                name="mini_bolt006_298"
                position={[0.792, -0.026, -0.935]}
                rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh
                  name="Object_600"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_600.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group
                name="mini_bolt007_299"
                position={[0.785, -0.026, -0.778]}
                rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh
                  name="Object_602"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_602.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group
                name="mini_bolt008_300"
                position={[0.785, -0.026, -0.715]}
                rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh
                  name="Object_604"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_604.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt009_301" position={[1.412, 0.133, -0.758]}>
                <mesh
                  name="Object_606"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_606.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt010_302" position={[-0.664, -0.032, -0.221]}>
                <mesh
                  name="Object_608"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_608.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt011_303" position={[-0.5, -0.032, -0.221]}>
                <mesh
                  name="Object_610"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_610.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt012_304" position={[-0.664, -0.032, -0.068]}>
                <mesh
                  name="Object_612"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_612.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt013_305" position={[-0.5, -0.032, -0.068]}>
                <mesh
                  name="Object_614"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_614.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt014_306" position={[0.5, -0.032, -0.221]}>
                <mesh
                  name="Object_616"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_616.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt015_307" position={[0.663, -0.032, -0.221]}>
                <mesh
                  name="Object_618"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_618.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt016_308" position={[0.5, -0.032, -0.068]}>
                <mesh
                  name="Object_620"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_620.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt017_309" position={[0.663, -0.032, -0.068]}>
                <mesh
                  name="Object_622"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_622.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt018_310" position={[-1.395, 0.129, -0.184]}>
                <mesh
                  name="Object_624"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_624.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt019_311" position={[-1.048, 0.129, -0.184]}>
                <mesh
                  name="Object_626"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_626.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt020_312" position={[-1.395, 0.129, 0.627]}>
                <mesh
                  name="Object_628"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_628.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt021_313" position={[-1.048, 0.129, 0.627]}>
                <mesh
                  name="Object_630"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_630.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt022_314" position={[1.042, 0.129, -0.184]}>
                <mesh
                  name="Object_632"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_632.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt023_315" position={[1.389, 0.129, -0.184]}>
                <mesh
                  name="Object_634"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_634.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt024_316" position={[1.042, 0.129, 0.627]}>
                <mesh
                  name="Object_636"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_636.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt025_317" position={[1.389, 0.129, 0.627]}>
                <mesh
                  name="Object_638"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_638.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt026_318" position={[-0.467, 0.044, -1.049]}>
                <mesh
                  name="Object_640"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_640.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt027_319" position={[-0.383, 0.044, -1.049]}>
                <mesh
                  name="Object_642"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_642.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt028_320" position={[0.384, 0.044, -1.049]}>
                <mesh
                  name="Object_644"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_644.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="mini_bolt029_321" position={[0.468, 0.044, -1.049]}>
                <mesh
                  name="Object_646"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_646.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="camera_emis001_329" position={[0, -0.2, 0.115]} scale={0.447}>
                <mesh
                  name="Object_648"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_648.geometry}
                  material={materials.mat_emis}
                />
                <mesh
                  name="Object_649"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_649.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="1_uv_port_1001_330" position={[1.517, -0.063, 0.389]}>
                <mesh
                  name="Object_651"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_651.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="port_2_331" position={[1.517, -0.063, 0.63]}>
                <mesh
                  name="Object_653"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_653.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="1_uv_port_1002_332" position={[1.517, -0.063, 0.147]}>
                <mesh
                  name="Object_655"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_655.geometry}
                  material={materials.mat_big_details}
                />
              </group>
              <group name="power_input_block_333" position={[0, 0.092, -0.965]}>
                <mesh
                  name="Object_657"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_657.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="tube_glass_border_334">
                <mesh
                  name="Object_659"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_659.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="tube_bottom_conect_335">
                <mesh
                  name="Object_661"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_661.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="tube_top_conect_336" position={[0, 0, 0.074]}>
                <mesh
                  name="Object_663"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_663.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="projector_connect_337" position={[0, 0.092, -0.319]}>
                <mesh
                  name="Object_665"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_665.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group
                name="projector_element_338"
                position={[0, -0.022, -0.164]}
                rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="Object_667"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_667.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="cpu_cable_conect_339" position={[0, 0.259, -0.673]}>
                <mesh
                  name="Object_669"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_669.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="cpu_cable_conect_side_340" position={[0, 0.259, -0.673]}>
                <mesh
                  name="Object_671"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_671.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group
                name="cable_conector_1_341"
                position={[0, 0.259, -0.673]}
                rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_673"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_673.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group
                name="cable_conector_3_342"
                position={[0, 0.259, -0.673]}
                rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_675"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_675.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="cadence_connector_343" position={[0, 0.259, -0.673]}>
                <mesh
                  name="Object_677"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_677.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="cable_conector_2_344" position={[0, 0.259, -0.673]}>
                <mesh
                  name="Object_679"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_679.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="Cube077_345" position={[0.361, -0.027, 0.007]}>
                <mesh
                  name="Object_681"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_681.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube078_346" position={[0.361, -0.027, 0.007]}>
                <mesh
                  name="Object_683"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_683.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube079_347" position={[0.361, -0.027, 0.007]}>
                <mesh
                  name="Object_685"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_685.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube080_348" position={[0.361, -0.027, 0.007]}>
                <mesh
                  name="Object_687"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_687.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube081_349" position={[0.361, -0.027, 0.007]}>
                <mesh
                  name="Object_689"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_689.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube082_350" position={[0.361, -0.027, 0.007]}>
                <mesh
                  name="Object_691"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_691.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube083_351" position={[-0.394, -0.027, 0.007]}>
                <mesh
                  name="Object_693"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_693.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube084_352" position={[-0.394, -0.027, 0.007]}>
                <mesh
                  name="Object_695"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_695.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube085_353" position={[-0.394, -0.027, 0.007]}>
                <mesh
                  name="Object_697"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_697.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube086_354" position={[-0.394, -0.027, 0.007]}>
                <mesh
                  name="Object_699"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_699.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube087_355" position={[-0.394, -0.027, 0.007]}>
                <mesh
                  name="Object_701"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_701.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group name="Cube088_356" position={[-0.394, -0.027, 0.007]}>
                <mesh
                  name="Object_703"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_703.geometry}
                  material={materials.mat_keyboard}
                />
              </group>
              <group
                name="Cylinder056_357"
                position={[-1.236, -0.059, -0.635]}
                rotation={[-Math.PI, 0, -Math.PI / 2]}>
                <mesh
                  name="Object_705"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_705.geometry}
                  material={materials.glass}
                />
              </group>
              <group
                name="Cylinder057_358"
                position={[-1.236, -0.059, -0.869]}
                rotation={[-Math.PI, 0, -Math.PI / 2]}>
                <mesh
                  name="Object_707"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_707.geometry}
                  material={materials.glass}
                />
              </group>
              <group
                name="Cylinder059_359"
                position={[1.241, -0.059, -0.869]}
                rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="Object_709"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_709.geometry}
                  material={materials.glass}
                />
              </group>
              <group
                name="Cylinder060_360"
                position={[1.241, -0.059, -0.635]}
                rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="Object_711"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_711.geometry}
                  material={materials.glass}
                />
              </group>
              <group
                name="add001_361"
                position={[-1.178, -0.059, -0.635]}
                rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="Object_713"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_713.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group
                name="gear001_362"
                position={[-1.29, -0.059, -0.635]}
                rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  name="Object_715"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_715.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group
                name="add002_363"
                position={[1.183, -0.059, -0.869]}
                rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="Object_717"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_717.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group
                name="gear002_364"
                position={[1.295, -0.059, -0.869]}
                rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="Object_719"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_719.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group
                name="add003_365"
                position={[1.183, -0.059, -0.635]}
                rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="Object_721"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_721.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group
                name="gear003_366"
                position={[1.295, -0.059, -0.635]}
                rotation={[0, 0, Math.PI / 2]}>
                <mesh
                  name="Object_723"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_723.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="tube_base_podium_367">
                <mesh
                  name="Object_725"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_725.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
              <group name="tube_plate_368">
                <mesh
                  name="Object_727"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_727.geometry}
                  material={materials.mat_computer_details}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/laptop.glb')

export default DemoLaptop
