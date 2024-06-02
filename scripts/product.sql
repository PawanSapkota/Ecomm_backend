CREATE TABLE product (
product_id INT  NOT NULL PRIMARY KEY AUTO_INCREMENT,
product_name varchar(255),
original_price varchar(50),
sale_price varchar(50),
product_category_id int,
product_description varchar(500),
FOREIGN KEY (product_category_id) REFERENCES category(category_id)


)

select * from product;

ALTER TABLE product
 ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
 
 
 INSERT INTO product(product_id,product_name,original_price,sale_price,product_category_id,product_description) VALUES (1,"JACKET","2000","1200",1,"This can be use in both summer and winter,made up of premium fibre.")
