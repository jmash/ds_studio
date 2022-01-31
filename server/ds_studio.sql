CREATE TABLE products (
    product_id int,
    images_link varchar(255),
    product_name varchar(255),
    product_price numeric,
    installer_link varchar(255),
    info text,
    trial_info text
);

INSERT INTO products VALUES (1, "/images/test", "Hyperchondriaker", 10.0, "/link/to/installer", "This thing is awesome", "Really fuckin' cool I mean it");