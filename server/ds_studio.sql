CREATE DATABASE ds_studio;

CREATE TABLE products (
    product_id int,
    images_link varchar(255),
    product_name varchar(255),
    product_price numeric,
    installer_link varchar(255),
    info text,
    trial_info text,
    product_link
);

INSERT INTO products VALUES (1, "/images/test", "test1", 10.0, "/link/to/installer", "This is test number one.", "This is a description of test number one");
INSERT INTO products VALUES (2, "/images/test2", "test2", 20.0, "/link/to/installer2", "This is test number two.", "This is a description of test number two");
