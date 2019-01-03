SET NAMES UTF8;

DROP DATABASE IF EXISTS bmn;

CREATE DATABASE bmn CHARSET=UTF8;

USE bmn;

/*1-7宝马汽车系列-全部车型*/
CREATE TABLE bmn_laptop(
    id INT PRIMARY KEY AUTO_INCREMENT,
    lid INT,          #汽车属系
    img VARCHAR(128),
    title VARCHAR(64),
    price DECIMAL(10,2)
);
INSERT INTO bmn_laptop VALUES
(NULL,1,"img/1x-1.png","BMW 1系两厢运动轿车",237800),
(NULL,1,"img/1x-2.png","BMW 1系两厢运动轿车",199800),
(NULL,2,"img/2x-1.png","新BMW 2系双门轿跑车",255800),
(NULL,2,"img/2x-2.png","新BMW 2系敞篷轿跑车",299800),
(NULL,2,"img/2x-3.png","新BMW 新BMW 2系旅行车",224800),
(NULL,2,"img/2x-4.png","新BMW 2系多功能旅行车",269800),
(NULL,3,"img/3x-1.png","新BMW 3系四门轿车",316800),
(NULL,3,"img/3x-2.png","新BMW 3系四门轿车",316800),
(NULL,4,"img/4x-1.png","BMW 4系双门轿跑车",369800),
(NULL,4,"img/4x-2.png","BMW 4系敞篷轿跑车",529800),
(NULL,4,"img/4x-3.png","BMW 4系四门轿跑车",369800),
(NULL,5,"img/5x-1.png","新BMW 5系四门轿车",429900),
(NULL,6,"img/6x-1.png","BMW 6系四门轿跑车",870000),
(NULL,6,"img/6x-2.png","BMW 6系双门轿跑车",998000),
(NULL,6,"img/6x-3.png","BMW 6系敞篷轿跑车",1048000),
(NULL,6,"img/6x-4.png","创新BMW 6系GT",649900),
(NULL,7,"img/7x-1.png","BMW 7系",328000),
(NULL,8,"img/x1.png","BMW X1 SAV",283800),
(NULL,8,"img/x2.png","创新BMW X2",289800),
(NULL,8,"img/x3.png","全新BMW X3 SAV",399800),
(NULL,8,"img/x4.png","全新BMW X4",269800),
(NULL,8,"img/x5.png","BMW X5 SAV",729900),
(NULL,8,"img/x6.png","BMW X6",829900),
(NULL,9,"img/m2.png","全新BMW M2雷霆版",649800),
(NULL,9,"img/m3.png","BMW M3",898900),
(NULL,9,"img/m4-1.png","BMW M4双门轿跑车",928900),
(NULL,9,"img/m4-2.png","BMW M4敞篷轿跑车",1018900),
(NULL,9,"img/m5.png","全新BMW M5",1518900),
(NULL,9,"img/m6-1.png","BMW M6四门轿跑车",1838000),
(NULL,9,"img/m6-2.png","BMW M6双门轿跑车",1838000),
(NULL,9,"img/m-x5.png","BMW X5 M SAV",1799900),
(NULL,9,"img/m-x6.png","BMW X6 M",1919900),
(NULL,10,"img/i3.png","新纯电动BMW i3",349800),
(NULL,10,"img/i8.png","BMW i8",1838000),
(NULL,11,"img/h-5x.png","2019款新BMW 5系插电式混合动力",499900),
(NULL,11,"img/h-x1.png","2019款BMW X1插电式混合动力",396800),
(NULL,11,"img/h-x5.png","BMW X5插电式混合动力",899900),
(NULL,11,"img/h-7x.png","BMW 7系插电式混合动力",1068000);

/*1-7宝马汽车系列-主页*/
CREATE TABLE bmn_core(
    id INT PRIMARY KEY AUTO_INCREMENT,
    series VARCHAR(10),          #汽车属系
    img VARCHAR(128),
    title VARCHAR(64),
    price DECIMAL(10,2)
);
INSERT INTO bmn_core VALUES
(NULL,"BMW 1系","img/1x-1.png","BMW 1系两厢运动轿车",237800),
(NULL,"BMW 1系","img/1x-2.png","BMW 1系两厢运动轿车",199800),
(NULL,"BMW 2系","img/2x-1.png","新BMW 2系双门轿跑车",255800),
(NULL,"BMW 2系","img/2x-2.png","新BMW 2系敞篷轿跑车",299800),
(NULL,"BMW 2系","img/2x-3.png","新BMW 新BMW 2系旅行车",224800),
(NULL,"BMW 2系","img/2x-4.png","新BMW 2系多功能旅行车",269800),
(NULL,"BMW 3系","img/3x-1.png","新BMW 3系四门轿车",316800),
(NULL,"BMW 3系","img/3x-2.png","新BMW 3系四门轿车",316800),
(NULL,"BMW 4系","img/4x-1.png","BMW 4系双门轿跑车",369800),
(NULL,"BMW 4系","img/4x-2.png","BMW 4系敞篷轿跑车",529800),
(NULL,"BMW 4系","img/4x-3.png","BMW 4系四门轿跑车",369800),
(NULL,"BMW 5系","img/5x-1.png","新BMW 5系四门轿车",429900),
(NULL,"BMW 6系","img/6x-1.png","BMW 6系四门轿跑车",870000),
(NULL,"BMW 6系","img/6x-2.png","BMW 6系双门轿跑车",998000),
(NULL,"BMW 6系","img/6x-3.png","BMW 6系敞篷轿跑车",1048000),
(NULL,"BMW 6系","img/6x-4.png","创新BMW 6系GT",649900),
(NULL,"BMW 7系","img/7x-1.png","BMW 7系",328000),
(NULL,"BMW X","img/x1.png","BMW X1 SAV",283800),
(NULL,"BMW X","img/x2.png","创新BMW X2",289800),
(NULL,"BMW X","img/x3.png","全新BMW X3 SAV",399800),
(NULL,"BMW X","img/x4.png","全新BMW X4",269800),
(NULL,"BMW X","img/x5.png","BMW X5 SAV",729900),
(NULL,"BMW X","img/x6.png","BMW X6",829900),
(NULL,"BMW M","img/m2.png","全新BMW M2雷霆版",649800),
(NULL,"BMW M","img/m3.png","BMW M3",898900),
(NULL,"BMW M","img/m4-1.png","BMW M4双门轿跑车",928900),
(NULL,"BMW M","img/m4-2.png","BMW M4敞篷轿跑车",1018900),
(NULL,"BMW M","img/m5.png","全新BMW M5",1518900),
(NULL,"BMW M","img/m6-1.png","BMW M6四门轿跑车",1838000),
(NULL,"BMW M","img/m6-2.png","BMW M6双门轿跑车",1838000),
(NULL,"BMW M","img/m-x5.png","BMW X5 M SAV",1799900),
(NULL,"BMW M","img/m-x6.png","BMW X6 M",1919900),
(NULL,"BMW i","img/i3.png","新纯电动BMW i3",349800),
(NULL,"BMW i","img/i8.png","BMW i8",1838000),
(NULL,"电动性能","img/h-5x.png","2019款新BMW 5系插电式混合动力",499900),
(NULL,"电动性能","img/h-x1.png","2019款BMW X1插电式混合动力",396800),
(NULL,"电动性能","img/h-x5.png","BMW X5插电式混合动力",899900),
(NULL,"电动性能","img/h-7x.png","BMW 7系插电式混合动力",1068000);

/*车辆的详细配置*/

CREATE TABLE car_detail(
    id INT PRIMARY KEY AUTO_INCREMENT,
    series VARCHAR(20),          #汽车属系
    top_img VARCHAR(64),
    html_h1 VARCHAR(64),
    html_h3 VARCHAR(64),
    img VARCHAR(128),
    sj  VARCHAR(64),
    sj_img VARCHAR(128),
    xn VARCHAR(64),
    xn_img VARCHAR(128),
    title VARCHAR(64),
    price DECIMAL(10,2)
);
INSERT INTO car_detail VALUES
(1,"BMW 1系","img/car_detail/bmw1-1-1.jpg","瞬息热恋","BMW 1系两厢运动轿车,蓄势待发","img/car_detail/bmw1-1-1.1.jpg","运动设计?功能内装","img/car_detail/bmw1-1-2.jpg?img/car_detail/bmw1-1-3.jpg","全方位互联?强劲性能?M perfromance","img/car_detail/bmw1-1-4.jpg?img/car_detail/bmw1-1-5.jpg?img/car_detail/bmw1-1-6.jpg","BMW 1系两厢运动轿车",237800);
INSERT INTO car_detail VALUES
(3,"BMW 2系","img/car_detail/bmw2-1.jpg","三排座椅，三倍乐趣","新BMW 2系多功能旅行车","img/car_detail/bmw2-2.png","运动设计?功能内装","img/car_detail/bmw1-1-2.jpg?img/car_detail/bmw1-1-3.jpg","全方位互联?强劲性能?M perfromance","img/car_detail/bmw1-1-4.jpg?img/car_detail/bmw1-1-5.jpg?img/car_detail/bmw1-1-6.jpg","BMW 1系两厢运动轿车",237800);

CREATE TABLE user_u(
    id INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(10),          #汽车属系
    pwd int
);
INSERT into user_u values(null,"dingding","123456");
INSERT into user_u values(null,"hanmeimei","123456");
INSERT into user_u values(null,"dondong","123456");