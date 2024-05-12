

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name varchar(255) NOT NULL,
    photo varchar(255) ,
    email varchar(255) NOT NULL UNIQUE,       
    password VARCHAR(255) NOT NULL, 
    role_id INT,   
    FOREIGN KEY (role_id)  REFERENCES roles(role_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


alter table users modify role_id int default 1;



CREATE TABLE roles (
    role_id INT AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    
);