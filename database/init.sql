-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE access_level (
  id SERIAL PRIMARY KEY,
  access_level INT,
  access_label VARCHAR(50)
);
CREATE TABLE gender (
  id SERIAL PRIMARY KEY,
  gender_label VARCHAR(20)
);
CREATE TABLE ethnicity (
  id SERIAL PRIMARY KEY,
  ethnicity_label varchar(100)
);

CREATE TABLE volunteer_role (
  id SERIAL PRIMARY KEY,
  role_label VARCHAR(150)
);

CREATE TABLE education_level(
  id SERIAL PRIMARY KEY,
  education_label varchar(100)
);

CREATE TABLE "user" (
  id SERIAL PRIMARY KEY,
  is_active  BOOLEAN,
  username VARCHAR(50),
  password VARCHAR(100),
  highest_education_level INT REFERENCES "education_level"(id),
  access_level INT DEFAULT 1 REFERENCES "access_level"(id),
  volunteer_role INT REFERENCES "volunteer_role"(id), 
  registered_first_name VARCHAR(50),
  registered_middle_name VARCHAR(50),
  registered_last_name VARCHAR(50),
  first_name VARCHAR(50),
  middle_name VARCHAR(50),
  last_name VARCHAR(50),
  birth_date VARCHAR,
  posting_date DATE DEFAULT CURRENT_DATE, 
  gender INT REFERENCES "gender"(id),
  ethnicity INT REFERENCES "ethnicity"(id),
  zip_code INT,
  phone_number VARCHAR(50),
  email VARCHAR(50),
  company VARCHAR,
  job_title VARCHAR,
  motivation_bio TEXT,
  experience_bio TEXT,
  background_check_permission BOOLEAN,
  custom_entry_skills TEXT
);

CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  image_name VARCHAR(100),
  link_url VARCHAR(500)
);

CREATE TABLE user_images (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES "user",
  image_id INT REFERENCES "images"(id)
);
CREATE TABLE admin_note (
  id SERIAL PRIMARY KEY,
  user_id_creator int REFERENCES "user"(id),
  user_id_subject int REFERENCES "user"(id),
  note_on_subject text
);
CREATE TABLE languages (
  id SERIAL PRIMARY KEY,
  languages_label VARCHAR(100)
);
CREATE TABLE user_languages (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES "user",
  languages_id INT REFERENCES "languages"
);
CREATE TABLE skills (
  id SERIAL PRIMARY KEY,
  skills_label VARCHAR(100)
);
CREATE TABLE user_skills (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES "user",
  skills_id INT REFERENCES "skills"
);
CREATE TABLE event_type (
  id SERIAL PRIMARY KEY,
  type_label VARCHAR
);
CREATE TABLE "event" (
  id SERIAL PRIMARY KEY,
  event_type INT REFERENCES "event_type",
  event_title VARCHAR(200),
  count INT,
  frequency VARCHAR(20),
  recurring BOOLEAN,
  creator INT REFERENCES "user",
  event_address VARCHAR(500),
  event_start TIMESTAMP WITH TIME ZONE,
  event_end TIMESTAMP WITH TIME ZONE,
  event_description TEXT
);

CREATE TABLE time_slot_day (
  id SERIAL PRIMARY KEY,
  day_number INT,
  day_name VARCHAR(10)
);
CREATE TABLE time_slot (
  id SERIAL PRIMARY KEY,
  day_of_week INT REFERENCES "time_slot_day"(id),
  time_slot_label VARCHAR(100)
);
CREATE TABLE day_slot (
  id SERIAL PRIMARY KEY,
  event_id INT REFERENCES "event",
  time_slot_day INT REFERENCES "time_slot_day"
);
CREATE TABLE user_time_slot (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES "user", 
  time_slot_id INT REFERENCES "time_slot"
);
CREATE TABLE event_images (
  id SERIAL PRIMARY KEY,
  event_id INT REFERENCES "event",
  image_id INT REFERENCES "images"
);

CREATE TABLE user_event (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES "user",
  event_id INT REFERENCES "event",
  approved BOOLEAN
);