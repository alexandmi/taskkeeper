CREATE DATABASE  IF NOT EXISTS `test01` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `test01`;
-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: test01
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `folders`
--

DROP TABLE IF EXISTS `folders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `folders` (
  `id` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `folders`
--

LOCK TABLES `folders` WRITE;
/*!40000 ALTER TABLE `folders` DISABLE KEYS */;
INSERT INTO `folders` VALUES (1,'Family and Home'),(2,'Work'),(3,'Gym'),(4,'Hobbies'),(5,'Social');
/*!40000 ALTER TABLE `folders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `folders_seq`
--

DROP TABLE IF EXISTS `folders_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `folders_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `folders_seq`
--

LOCK TABLES `folders_seq` WRITE;
/*!40000 ALTER TABLE `folders_seq` DISABLE KEYS */;
INSERT INTO `folders_seq` VALUES (101);
/*!40000 ALTER TABLE `folders_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasks` (
  `id` bigint NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `folder` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKd0y3nlx9ap0vmxyokc1l5qydh` (`folder`),
  CONSTRAINT `FKd0y3nlx9ap0vmxyokc1l5qydh` FOREIGN KEY (`folder`) REFERENCES `folders` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (1,'Helen\'s birthday is next week. Last year you forgot it and you came with empty hands, so buy something good!','Buy a gift for Helen\'s birthday',1),(2,'He says he is ok and that it\'s not even a strain, but better be safe than sorry. If it gets worse he might miss the high school basketball tournament.','Book an appointment for Eric\'s ankle sprain',1),(3,'The old one will break apart completely soon. I must go to the shop myself and buy it. Also do not forget to take the measurements.','Buy a new washing machine',1),(4,'Cleaners are next to the washing machine. We will have guests so it\'s important.','Clean the balcony',1),(5,'The documentation must be pristine, not like the previous time.','Complete the project report',2),(6,'Reassure him that during the update his operations will not be hindered.','Inform the client about the changes in the product',2),(7,'','Return the mug I took from Greg',2),(8,'','Bench 225 until the end of the month',3),(9,'','Do 15 pullups every day in the morning',3),(10,'Be ready before the local marathon event begins.','Be able to run 5k in 20\'',3),(11,'Not Saturday, because of his work. Organize it until next Monday. There is no way he\'ll ever decide, so I must take the initiative or we are never going.','Decide in a date for mountain hiking with John',4),(12,'I think those config files are the problem.','Fix the bug that breaks your foss aplication',4),(13,'I told her we would go two months ago.','Take Maria out for coffee',5),(14,'After tommorow they will be gone for food.','Book tickets for the rock concert',5);
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasks_seq`
--

DROP TABLE IF EXISTS `tasks_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasks_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks_seq`
--

LOCK TABLES `tasks_seq` WRITE;
/*!40000 ALTER TABLE `tasks_seq` DISABLE KEYS */;
INSERT INTO `tasks_seq` VALUES (101);
/*!40000 ALTER TABLE `tasks_seq` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-12  7:14:59
