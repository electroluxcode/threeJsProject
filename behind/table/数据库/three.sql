/*
 Navicat Premium Data Transfer

 Source Server         : 3306
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : three

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 13/10/2022 09:16:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for barcharts
-- ----------------------------
DROP TABLE IF EXISTS `barcharts`;
CREATE TABLE `barcharts`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `date` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `forecastcount` int(11) NULL DEFAULT NULL,
  `realcount` int(11) NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of barcharts
-- ----------------------------
INSERT INTO `barcharts` VALUES (1, '柱状图', '小区入住户数', '第一季度', 188, 200, '2022-03-14 05:50:11', '2022-03-17 15:27:04');
INSERT INTO `barcharts` VALUES (2, '柱状图', '小区入住户数', '第二季度', 158, 162, '2022-03-14 05:50:11', '2022-03-14 05:50:11');
INSERT INTO `barcharts` VALUES (3, '柱状图', '小区入住户数', '第三季度', 191, 185, '2022-03-14 05:50:11', '2022-03-14 05:50:11');
INSERT INTO `barcharts` VALUES (4, '柱状图', '小区入住户数', '第四季度', 232, 192, '2022-03-14 05:50:11', '2022-03-14 05:50:11');

-- ----------------------------
-- Table structure for basketballgrounds
-- ----------------------------
DROP TABLE IF EXISTS `basketballgrounds`;
CREATE TABLE `basketballgrounds`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `objectlistId` int(11) NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `isempty` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of basketballgrounds
-- ----------------------------
INSERT INTO `basketballgrounds` VALUES (1, 1, 'baseketball', '是', '2022-03-13 14:34:06', '2022-03-16 17:04:50');

-- ----------------------------
-- Table structure for buildingdetails
-- ----------------------------
DROP TABLE IF EXISTS `buildingdetails`;
CREATE TABLE `buildingdetails`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `height` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `floor` int(11) NULL DEFAULT NULL,
  `square` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `malecount` int(11) NULL DEFAULT NULL,
  `femalecount` int(11) NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of buildingdetails
-- ----------------------------
INSERT INTO `buildingdetails` VALUES (1, 'dep1', '16米', 5, '130平方米', 40, 160, '2022-03-14 07:05:28', '2022-03-17 12:17:08');
INSERT INTO `buildingdetails` VALUES (2, 'dep2', '3米', 1, '50平方米', 5, 5, '2022-03-14 07:05:28', '2022-03-14 07:05:28');
INSERT INTO `buildingdetails` VALUES (3, 'dep3', '19米', 6, '80平方米', 60, 55, '2022-03-14 07:05:28', '2022-03-14 07:05:28');
INSERT INTO `buildingdetails` VALUES (4, 'dep4', '15米', 5, '130平方米', 20, 10, '2022-03-14 07:05:28', '2022-03-14 07:05:28');
INSERT INTO `buildingdetails` VALUES (5, 'dep5', '7米', 2, '100平方米', 24, 8, '2022-03-14 07:05:28', '2022-03-14 07:05:28');
INSERT INTO `buildingdetails` VALUES (6, 'dep6', '10米', 3, '100平方米', 14, 8, '2022-03-14 07:05:28', '2022-03-14 07:05:28');
INSERT INTO `buildingdetails` VALUES (7, 'dep7', '22米', 7, '110平方米', 40, 33, '2022-03-14 07:05:28', '2022-03-14 07:05:28');
INSERT INTO `buildingdetails` VALUES (8, 'dep8', '15米', 5, '130平方米', 133, 124, '2022-03-14 07:05:28', '2022-03-14 07:05:28');

-- ----------------------------
-- Table structure for buildings
-- ----------------------------
DROP TABLE IF EXISTS `buildings`;
CREATE TABLE `buildings`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `objectlistId` int(11) NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `livecount` int(11) NULL DEFAULT NULL,
  `floorcount` int(11) NULL DEFAULT NULL,
  `checkinrate` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of buildings
-- ----------------------------
INSERT INTO `buildings` VALUES (1, 1, 'dep1', 99, 60, '0.66', '2022-03-13 14:25:41', '2022-08-08 07:24:31');
INSERT INTO `buildings` VALUES (2, 1, '测试', 6, 2, '1', '2022-03-13 14:25:41', '2022-04-09 07:05:13');
INSERT INTO `buildings` VALUES (3, 1, '测试', 38, 6, '0.91', '2022-03-13 14:25:41', '2022-03-13 14:25:41');
INSERT INTO `buildings` VALUES (4, 1, '测试', 13, 3, '0.5', '2022-03-13 14:25:41', '2022-03-13 14:25:41');
INSERT INTO `buildings` VALUES (5, 1, '测试', 33, 3, '0.33', '2022-03-13 14:25:41', '2022-03-13 14:25:41');
INSERT INTO `buildings` VALUES (6, 1, '测试', 4, 2, '1', '2022-03-13 14:25:41', '2022-03-13 14:25:41');
INSERT INTO `buildings` VALUES (7, 1, '测试', 38, 5, '1', '2022-03-13 14:25:41', '2022-03-13 14:25:41');
INSERT INTO `buildings` VALUES (8, 1, '测试', 70, 5, '0.98', '2022-03-13 14:25:41', '2022-03-13 14:25:41');

-- ----------------------------
-- Table structure for buildstatuses
-- ----------------------------
DROP TABLE IF EXISTS `buildstatuses`;
CREATE TABLE `buildstatuses`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` int(11) NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of buildstatuses
-- ----------------------------
INSERT INTO `buildstatuses` VALUES (1, 'xxxx\r\n测试\r\n测试\r\n测', 3, '2022-03-20 12:11:30', '2022-05-12 06:19:10');
INSERT INTO `buildstatuses` VALUES (2, 'dep2', 0, '2022-03-20 12:11:30', '2022-05-12 06:18:12');
INSERT INTO `buildstatuses` VALUES (3, 'dep3', 0, '2022-03-20 12:11:30', '2022-03-20 12:11:30');
INSERT INTO `buildstatuses` VALUES (4, 'dep4', 0, '2022-03-20 12:11:30', '2022-03-20 12:11:30');
INSERT INTO `buildstatuses` VALUES (5, 'dep5', 1, '2022-03-20 12:11:30', '2022-05-12 06:18:19');
INSERT INTO `buildstatuses` VALUES (6, 'dep6', 0, '2022-03-20 12:11:30', '2022-03-20 12:11:30');
INSERT INTO `buildstatuses` VALUES (7, 'dep7', 0, '2022-03-20 12:11:30', '2022-05-12 06:18:23');
INSERT INTO `buildstatuses` VALUES (8, 'dep8', 2, '2022-03-20 12:11:30', '2022-05-12 06:19:18');

-- ----------------------------
-- Table structure for buses
-- ----------------------------
DROP TABLE IF EXISTS `buses`;
CREATE TABLE `buses`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `objectlistId` int(11) NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `starttime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of buses
-- ----------------------------
INSERT INTO `buses` VALUES (1, 1, 'bus', '2022/2/28', '2022-03-13 14:47:01', '2022-03-16 13:11:53');

-- ----------------------------
-- Table structure for carparks
-- ----------------------------
DROP TABLE IF EXISTS `carparks`;
CREATE TABLE `carparks`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `staytime` int(11) NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of carparks
-- ----------------------------
INSERT INTO `carparks` VALUES (1, 'car1', 27, '2022-03-15 05:59:25', '2022-03-15 05:59:25');
INSERT INTO `carparks` VALUES (2, 'car2', 57, '2022-03-15 05:59:25', '2022-03-15 05:59:25');
INSERT INTO `carparks` VALUES (3, 'car3', 36, '2022-03-15 05:59:25', '2022-03-15 05:59:25');
INSERT INTO `carparks` VALUES (4, 'car4', 79, '2022-03-15 05:59:25', '2022-03-20 14:11:23');

-- ----------------------------
-- Table structure for cars
-- ----------------------------
DROP TABLE IF EXISTS `cars`;
CREATE TABLE `cars`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `objectlistId` int(11) NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `license` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cars
-- ----------------------------
INSERT INTO `cars` VALUES (1, 1, 'car1', '粤Q15234', '2022-03-13 14:05:30', '2022-03-13 14:05:30');
INSERT INTO `cars` VALUES (2, 1, 'car2', '粤Q37988', '2022-03-13 14:05:30', '2022-03-16 13:11:33');
INSERT INTO `cars` VALUES (3, 1, 'car3', '粤Q13531', '2022-03-13 14:05:30', '2022-03-13 14:05:30');
INSERT INTO `cars` VALUES (4, 1, 'car4', '粤Q12315', '2022-03-13 14:05:30', '2022-03-13 14:05:30');

-- ----------------------------
-- Table structure for funnelcharts
-- ----------------------------
DROP TABLE IF EXISTS `funnelcharts`;
CREATE TABLE `funnelcharts`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `buildingdetailId` int(11) NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `value` int(11) NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 41 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of funnelcharts
-- ----------------------------
INSERT INTO `funnelcharts` VALUES (1, 1, '当前建筑住户年龄结构', 68, '20以下', '2022-03-14 07:25:23', '2022-03-17 12:03:26');
INSERT INTO `funnelcharts` VALUES (2, 1, '当前建筑住户年龄结构', 100, '20-30岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (3, 1, '当前建筑住户年龄结构', 111, '30-40岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (4, 1, '当前建筑住户年龄结构', 80, '40-50岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (5, 1, '当前建筑住户年龄结构', 60, '60岁以上', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (6, 2, '当前建筑住户年龄结构', 47, '20以下', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (7, 2, '当前建筑住户年龄结构', 90, '20-30岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (8, 2, '当前建筑住户年龄结构', 55, '30-40岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (9, 2, '当前建筑住户年龄结构', 80, '40-50岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (10, 2, '当前建筑住户年龄结构', 60, '60岁以上', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (11, 3, '当前建筑住户年龄结构', 31, '30以下', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (12, 3, '当前建筑住户年龄结构', 71, '30-30岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (13, 3, '当前建筑住户年龄结构', 67, '30-40岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (14, 3, '当前建筑住户年龄结构', 73, '40-50岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (15, 3, '当前建筑住户年龄结构', 54, '60岁以上', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (16, 4, '当前建筑住户年龄结构', 47, '30以下', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (17, 4, '当前建筑住户年龄结构', 90, '30-30岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (18, 4, '当前建筑住户年龄结构', 55, '30-40岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (19, 4, '当前建筑住户年龄结构', 80, '40-50岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (20, 4, '当前建筑住户年龄结构', 60, '60岁以上', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (21, 5, '当前建筑住户年龄结构', 47, '30以下', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (22, 5, '当前建筑住户年龄结构', 99, '30-30岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (23, 5, '当前建筑住户年龄结构', 82, '30-40岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (24, 5, '当前建筑住户年龄结构', 73, '40-50岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (25, 5, '当前建筑住户年龄结构', 28, '60岁以上', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (26, 6, '当前建筑住户年龄结构', 86, '30以下', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (27, 6, '当前建筑住户年龄结构', 61, '30-30岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (28, 6, '当前建筑住户年龄结构', 22, '30-40岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (29, 6, '当前建筑住户年龄结构', 94, '40-50岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (30, 6, '当前建筑住户年龄结构', 87, '60岁以上', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (31, 7, '当前建筑住户年龄结构', 96, '30以下', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (32, 7, '当前建筑住户年龄结构', 68, '30-30岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (33, 7, '当前建筑住户年龄结构', 39, '30-40岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (34, 7, '当前建筑住户年龄结构', 45, '40-50岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (35, 7, '当前建筑住户年龄结构', 56, '60岁以上', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (36, 8, '当前建筑住户年龄结构', 69, '30以下', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (37, 8, '当前建筑住户年龄结构', 71, '30-30岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (38, 8, '当前建筑住户年龄结构', 49, '30-40岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (39, 8, '当前建筑住户年龄结构', 73, '40-50岁', '2022-03-14 07:25:23', '2022-03-14 07:25:23');
INSERT INTO `funnelcharts` VALUES (40, 8, '当前建筑住户年龄结构', 54, '60岁以上', '2022-03-14 07:25:23', '2022-03-14 07:25:23');

-- ----------------------------
-- Table structure for objectlists
-- ----------------------------
DROP TABLE IF EXISTS `objectlists`;
CREATE TABLE `objectlists`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of objectlists
-- ----------------------------
INSERT INTO `objectlists` VALUES (1, '社区组成元素', '2022-03-13 13:36:48', '2022-03-13 13:36:48');

-- ----------------------------
-- Table structure for parkings
-- ----------------------------
DROP TABLE IF EXISTS `parkings`;
CREATE TABLE `parkings`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `objectlistId` int(11) NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `surpluscount` int(11) NULL DEFAULT NULL,
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of parkings
-- ----------------------------
INSERT INTO `parkings` VALUES (1, 1, 'http', 11, '开启', '2022-03-13 15:00:26', '2022-03-16 17:04:56');

-- ----------------------------
-- Table structure for raycharts
-- ----------------------------
DROP TABLE IF EXISTS `raycharts`;
CREATE TABLE `raycharts`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `date` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `aqi` float NULL DEFAULT NULL,
  `pm2` float NULL DEFAULT NULL,
  `pm10` float NULL DEFAULT NULL,
  `co` float NULL DEFAULT NULL,
  `no2` float NULL DEFAULT NULL,
  `so2` float NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of raycharts
-- ----------------------------
INSERT INTO `raycharts` VALUES (1, '雷达图', '进入停车场时间分析', 'Morning', 234, 255, 230, 4.09, 123, 100, '2022-03-14 04:08:39', '2022-03-17 15:26:08');
INSERT INTO `raycharts` VALUES (2, '雷达图', '进入停车场时间分析', 'Afternoon', 146, 84, 139, 1.094, 40, 17, '2022-03-14 04:08:39', '2022-03-14 04:08:39');
INSERT INTO `raycharts` VALUES (3, '雷达图', '进入停车场时间分析', 'Evening', 188, 143, 197, 1.66, 99, 51, '2022-03-14 04:08:39', '2022-03-14 04:08:39');

-- ----------------------------
-- Table structure for sequelizemeta
-- ----------------------------
DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE `sequelizemeta`  (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sequelizemeta
-- ----------------------------
INSERT INTO `sequelizemeta` VALUES ('20220313132221-create-objectlist.js');
INSERT INTO `sequelizemeta` VALUES ('20220313134003-create-truck.js');
INSERT INTO `sequelizemeta` VALUES ('20220313140205-create-car.js');
INSERT INTO `sequelizemeta` VALUES ('20220313142042-create-building.js');
INSERT INTO `sequelizemeta` VALUES ('20220313142843-create-basketballground.js');
INSERT INTO `sequelizemeta` VALUES ('20220313144138-create-bus.js');
INSERT INTO `sequelizemeta` VALUES ('20220313145039-create-tree.js');
INSERT INTO `sequelizemeta` VALUES ('20220313145801-create-parking.js');
INSERT INTO `sequelizemeta` VALUES ('20220314035338-create-raychart.js');
INSERT INTO `sequelizemeta` VALUES ('20220314053929-create-barchart.js');
INSERT INTO `sequelizemeta` VALUES ('20220314063737-create-buildingdetail.js');
INSERT INTO `sequelizemeta` VALUES ('20220314071050-create-funnelchart.js');
INSERT INTO `sequelizemeta` VALUES ('20220314074409-create-user.js');
INSERT INTO `sequelizemeta` VALUES ('20220315055049-create-carpark.js');
INSERT INTO `sequelizemeta` VALUES ('20220320120049-create-buildstatus.js');

-- ----------------------------
-- Table structure for trees
-- ----------------------------
DROP TABLE IF EXISTS `trees`;
CREATE TABLE `trees`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `objectlistId` int(11) NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `healthycount` int(11) NULL DEFAULT NULL,
  `unhealthycount` int(11) NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of trees
-- ----------------------------
INSERT INTO `trees` VALUES (1, 1, 'tree', 16, 6, '2022-03-13 14:53:48', '2022-03-13 14:53:48');

-- ----------------------------
-- Table structure for trucks
-- ----------------------------
DROP TABLE IF EXISTS `trucks`;
CREATE TABLE `trucks`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `objectlistId` int(11) NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `kilmeters` int(11) NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of trucks
-- ----------------------------
INSERT INTO `trucks` VALUES (1, 1, 'truck1', 14888, '2022-03-13 13:43:41', '2022-03-16 13:07:04');
INSERT INTO `trucks` VALUES (2, 1, 'truck2', 37955, '2022-03-13 13:43:41', '2022-03-16 13:04:37');
INSERT INTO `trucks` VALUES (3, 1, 'truck3', 125323, '2022-03-13 13:43:41', '2022-03-13 13:43:41');
INSERT INTO `trucks` VALUES (4, 1, 'truck4', 53123, '2022-03-13 13:43:41', '2022-03-13 13:43:41');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` int(11) NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'admin', '123456', 1, '2022-03-14 07:51:21', '2022-03-14 07:51:21');
INSERT INTO `users` VALUES (2, 'xiaohong', '123456', 0, '2022-03-14 07:51:21', '2022-03-14 07:51:21');
INSERT INTO `users` VALUES (3, 'test', '123456', 0, '2022-03-14 07:51:21', '2022-03-14 07:51:21');
INSERT INTO `users` VALUES (9, '丫丫', '19990919', 0, '2022-03-15 17:11:14', '2022-03-15 17:11:14');
INSERT INTO `users` VALUES (22, 'newUser', '123456', 0, '2022-05-10 12:48:01', '2022-05-10 12:48:01');

SET FOREIGN_KEY_CHECKS = 1;
