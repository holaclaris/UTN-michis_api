-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-06-2024 a las 00:23:11
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gatos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gatos`
--

CREATE TABLE `gatos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `sexo` varchar(255) NOT NULL,
  `raza` varchar(255) NOT NULL,
  `edad` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `gatos`
--

INSERT INTO `gatos` (`id`, `nombre`, `sexo`, `raza`, `edad`, `descripcion`, `img`) VALUES
(1, 'Patitas', 'hembra', 'himalayo', 'cachorro', 'Cachorra muy dulce y curiosa, ama a los niños', 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200x200'),
(2, 'Severino', 'macho', 'bengali', 'cachorro', 'Este adorable cachorro bengali adora madrugar y observar pájaros por la ventana.', 'https://www.zastavki.com/pictures/originals/2013/Animals___Cats_Small_beautiful_Bengal_cat_saw_something_045464_.jpg'),
(3, 'Ronald', 'macho', 'bosque de Noruega', 'adulto', 'Un gato apacible y muy cariñoso, disfruta el sol y explorar en el jardín', 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
(4, 'Mafalda', 'hembra', 'bosque de Noruega', 'adulto mayor', 'Una gata muy compañera y divertida, dulce con las personas, acostumbrada a estar con otros gatos y perros', 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\n'),
(5, 'Tuni', 'macho', 'mixta', 'cachorro', 'Muy pícaro y simpático, ama las pantuflas y dormir acurrucado', 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
(6, 'Walt', 'macho', 'angora', 'adulto mayor', 'Un gato elegante y muy aventurero. Le gusta trepar y explorar.', 'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
(7, 'Bilbo', 'macho', 'persa', 'adulto mayor', 'A pesar de su cara seria, es la ternura de la casa. Muy tranquilo y compañero', 'https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
(8, 'Inca', 'macho', 'siames', 'adulto', 'Una gato muy gracioso y siempre listo para jugar', 'https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
(9, 'Muni', 'hembra', 'mixta', 'cachorro', 'La pelusita más tierna del mundo, deja suspiros a su paso', 'https://images.unsplash.com/photo-1586042091284-bd35c8c1d917?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
(10, 'Mandarin', 'macho', 'mixta', 'cachorro', 'El naranjita más adorable!', 'https://images.unsplash.com/photo-1604430352727-c0555f882e01?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
(11, 'Lunita', 'hembra', 'bosque de Noruega', 'cachorro', 'La más tierna y divertida, le gusta explorar y robar sonrisas', 'https://images.unsplash.com/photo-1557166984-80ccf26c32e0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
(12, 'Gandalf', 'macho', 'mixta', 'cachorro', 'Este pequeño mago hará aparecer la alegría en tu día!', 'https://images.unsplash.com/photo-1570824103328-fc896d14912e?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
(13, 'Maxi', 'macho', 'mixta', 'adulto mayor', 'Este ancianito tuvo una vida dura pero ahora es todo mimos', 'https://images.unsplash.com/photo-1569619543238-3c81d8ab78a8?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
(17, 'Minion', 'macho', 'mixta', 'adulto', 'Un gato muy gracioso y protector, le encantan los niños y los ovillos de lana', 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
(18, 'Tito', 'macho', 'cartujo', 'adulto', 'Divertido y amante de los lentes de sol', 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
(70, 'Mafalda', 'hembra', 'bosque de Noruega', 'adulto', 'Compañera, inteligente y muy cariñosa. Le encanta jugar con bolsas y mochilas.', 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
(115, 'Nieve', 'macho', 'angora', 'adulto', 'Este gato cómico ama las selfies y ser el mimado de la casa. ', 'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfHx8MA%3D%3D'),
(116, 'Alex', 'macho', 'azul ruso', 'cachorro', 'Este cachorro raza azul ruso ama la nieve y jugar con hojas secas en otoño.', 'https://waterballoon.me/wp-content/uploads/2019/07/6-113.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `gatos`
--
ALTER TABLE `gatos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `gatos`
--
ALTER TABLE `gatos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
