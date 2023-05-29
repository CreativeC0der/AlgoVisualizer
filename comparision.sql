-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 10, 2022 at 03:33 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `comparision`
--

-- --------------------------------------------------------

--
-- Table structure for table `bubble`
--

CREATE TABLE `bubble` (
  `points` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bubble`
--

INSERT INTO `bubble` (`points`) VALUES
('Bubble sort compares elements to place the max elements to the end positions.'),
('The best case time complexity of bubble sort is O(n) ,average case is O(n^2), and worst case is O(n^2).'),
('The space complexity of Bubble Sort is O(1).'),
('Approach used in bubble sort is swapping.'),
('Advantage: Bubble sort is the simplest sorting approach.'),
('Disadvantage: Bubble sort is comparatively slower algorithm.');

-- --------------------------------------------------------

--
-- Table structure for table `insertion`
--

CREATE TABLE `insertion` (
  `points` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `insertion`
--

INSERT INTO `insertion` (`points`) VALUES
('Insertion sort compares elements to decide the position of an element in the partially sorted array.'),
('The best case time complexity of insertion sort is O(n) ,average case is O(n^2), and worst case is O(n^2).'),
('The space complexity of insertion Sort is O(1).'),
('Approach used in insertion sort is shifting.'),
('Advantage: Adaptive-- total number of steps is reduced for partially sorted array.'),
('Disadvantage: Insertion sort is generally used when the value of N is small. For larger values of N, it is inefficient. ');

-- --------------------------------------------------------

--
-- Table structure for table `merge`
--

CREATE TABLE `merge` (
  `points` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `merge`
--

INSERT INTO `merge` (`points`) VALUES
('Merge sort compares elements of two sorted elements to merge them into the final sorted array.'),
('The best case time complexity of merge sort is O(nlogn) ,average case is Onlogn), and worst case is O(nlogn).'),
('The space complexity of merge Sort is O(n).'),
('Approach used in merge sort is divide and conquer.'),
('Advantage: Merge Sort has a consistent running time, carries out different bits with similar  times in a stage.'),
('Disadvantage: Merge Sort goes through the whole process even if the list is sorted and consumes more memory.');

-- --------------------------------------------------------

--
-- Table structure for table `quick`
--

CREATE TABLE `quick` (
  `points` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quick`
--

INSERT INTO `quick` (`points`) VALUES
('Quick sort compares elements of partition the unsorted array two different halves around the pivot.'),
('The best case time complexity of quick sort is O(nlogn) ,average case is O(nlogn), and worst case is O(n^2).'),
('The space complexity of quick Sort is O(n).'),
('Approach used in quick sort is divide and conquer.'),
('Advantage: Quick sort works faster than other sorting algorithms for small data set like Selection sort etc and is an in place algorithm.'),
('Disadvantage: The worst case complexity of quick sort is O(n2) as there is need of lot of comparisons in the worst condition. ');

-- --------------------------------------------------------

--
-- Table structure for table `selection`
--

CREATE TABLE `selection` (
  `points` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `selection`
--

INSERT INTO `selection` (`points`) VALUES
('Selection sort compares elements to place the minimum elements the to front position.'),
('The best case time complexity of selection sort is O(n^2) ,average case is O(n^2), and worst case is O(n^2).'),
('The space complexity of Selection Sort is O(1).'),
('Approach used in bubble sort is swapping.'),
('Approach used in selection sort is swapping.'),
('Advantage: Selection sort can be used on list structures that make add and remove efficient, such as a linked list.'),
('Disadvantage: Time complexity in all cases is O(N2), no best case scenario.');

-- --------------------------------------------------------

--
-- Table structure for table `shell`
--

CREATE TABLE `shell` (
  `points` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shell`
--

INSERT INTO `shell` (`points`) VALUES
('Shell sort first sorts elements that are far apart from each other and successively reduces the interval between the elements to be sorted.'),
('The best case time complexity of shell sort is O(nlogn) ,average case is O(nlogn), and worst case is O(n(log n)^2).'),
('The space complexity of shell Sort is O(1).'),
('Shell sort is based on insertion sort and hence uses swapping as its approach.'),
('Advantages: With improved Average time complexity, Shell sort is a very efficient algorithm for medium size arrays.'),
('Disadvantage: Shell sort is a complex algorithm and is not that efficient as merge and quick sort for large dataset.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bubble`
--
ALTER TABLE `bubble`
  ADD UNIQUE KEY `points` (`points`) USING HASH;

--
-- Indexes for table `insertion`
--
ALTER TABLE `insertion`
  ADD UNIQUE KEY `points` (`points`) USING HASH;

--
-- Indexes for table `merge`
--
ALTER TABLE `merge`
  ADD UNIQUE KEY `points` (`points`) USING HASH;

--
-- Indexes for table `quick`
--
ALTER TABLE `quick`
  ADD UNIQUE KEY `points` (`points`) USING HASH;

--
-- Indexes for table `selection`
--
ALTER TABLE `selection`
  ADD UNIQUE KEY `points` (`points`) USING HASH;

--
-- Indexes for table `shell`
--
ALTER TABLE `shell`
  ADD UNIQUE KEY `points` (`points`) USING HASH;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
