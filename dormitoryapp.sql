-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 27, 2022 at 11:45 AM
-- Server version: 8.0.30-0ubuntu0.20.04.2
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dormitoryapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `dormitory`
--

CREATE TABLE `dormitory` (
  `id` int NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `dormitory`
--

INSERT INTO `dormitory` (`id`, `name`) VALUES
(2, 'สิทธิวรรณ');

-- --------------------------------------------------------

--
-- Table structure for table `Parcel`
--

CREATE TABLE `Parcel` (
  `id` int NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `parcel_number` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `company` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `room_number` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `recipient` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL,
  `imge` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Day` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `up_day` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Parcel`
--

INSERT INTO `Parcel` (`id`, `name`, `parcel_number`, `company`, `room_number`, `recipient`, `status`, `imge`, `Day`, `up_day`) VALUES
(1, 'อธิวัฒน์  ขาวแก้ว', '01-UBN1301-014', 'j&t', 'B19', 'ART', 1, '1663852467003-728981369.png', '2022-09-22 13:13:52', '2022-09-22 20:14:27'),
(2, 'aga', 'aGFAFGA', 'AFA', 'GAA', 'admin', 1, '1663852971984-859076549.png', '2022-09-22 13:22:23', '2022-09-22 20:22:51'),
(3, 'qeygwq', 'fqwt', 'qrq', 'qrq', 'admin', 1, '1663854835740-562308126.png', '2022-09-22 13:25:48', '2022-09-22 20:53:55'),
(4, 'afcaafa', 'affaa', 'afa', 'faf', 'admin', 0, NULL, '2022-09-22 13:57:32', NULL),
(5, 'aqfa3f', 'bvdb', 'sbv', 'B19', 'admin', 1, '1663857354164-13746172.png', '2022-09-22 14:34:13', '2022-09-22 21:35:54'),
(6, 'Asgf', 'sgs', 'fvsdv', 'B19', 'admin', 0, NULL, '2022-09-22 14:44:42', NULL),
(7, 'อธิวัฒน์  ขาวแก้ว', '17NE-11042-01', 'Flash', 'B19', 'art', 1, '1663913688551-616064015.png', '2022-09-22 15:16:45', '2022-09-23 13:14:48'),
(8, 'อธิวัฒน์', '0111257843', 'j&t', 'ฺB19', 'art', 0, NULL, '2022-09-23 06:17:34', NULL),
(9, 'Atiwat', '11112222', 'j&t', 'B19', 'art', 1, '1663914015846-292257512.png', '2022-09-23 06:19:14', '2022-09-23 13:20:15'),
(10, 'arttt', '9874521', 'j&t', 'B18', 'art', 0, NULL, '2022-09-23 06:22:04', NULL),
(11, 'GAG', '122122', '44', '11', 'art', 0, NULL, '2022-09-23 06:40:46', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int NOT NULL,
  `username` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `username`, `password`, `role`) VALUES
(1, 'admin', 'admin', 'admin'),
(2, 'B19', 'bb19', 'user'),
(3, 'art', '1234', 'admin'),
(4, 'aaa', '1234', 'admin'),
(5, 'B20', 'bb20', 'user'),
(6, 'B18', 'bb18', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dormitory`
--
ALTER TABLE `dormitory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Parcel`
--
ALTER TABLE `Parcel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dormitory`
--
ALTER TABLE `dormitory`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Parcel`
--
ALTER TABLE `Parcel`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
