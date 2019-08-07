INSERT INTO instructor
    (instructorID, name, address) VALUES
    (1, 'Mr Motivator', '123 ITV Lane');
INSERT INTO instructor VALUES
    (2, 'Davina McCall', '4 This Morning Avenue');
INSERT INTO instructor VALUES
    (3, 'Larry Ludircrous', '22 Jump Street'),
    (4, 'Harry Heartrate', '23 Burbington Street');


INSERT INTO gym_member (name, address, age) VALUES
    ('Homer Simpson', '742 Evergreen Terrace', 42),
    ('Marge Simpson', '742 Evergreen Terrace', 39),
    ('Abe Simpson', 'Old Folks Home', 75),
    ('Richard Hendrix', '42 Newell Road', 27),
    ('Bertram Gilfoyle', '42 Newell Road', 26),
    ('Derrick Trotter', '78 Nelson Mandela House', 35),
    ('Rodney Trotter', '78 Nelson Mandela House', 25);

INSERT INTO gym_class
    (classID, name, startTime, duration, instructorID) VALUES
    (2, 'Non Stop Jumping', '2019-05-11 14:00', 60, 1),
    (3, 'Repeatedly Lifting a Fridge', '2019-06-11 09:00', 60, 2),
    (4, 'Clownercise', '2019-07-11 18:00', 60, 3),
    (5, 'Running Around in Circles', '2019-08-11 10:00', 60, 4)
    (6, 'Unscrewing Pickle Jars', '2019-06-12', 30, 1)
    (7, 'Hammering Nails into Steel', '2019-06-13', 45, 2),
    (8, 'Punching Pillows', '2019-06-14', 20, 3),
    (9, 'Pulling Really Stiff Toilet Chains', '2019-06-15', 120, 4);

INSERT INTO booking (classID, memberID) VALUES
    (2, 4), (2, 5), (2, 6),
    (3, 1), (3, 6), (3, 7),
    (4, 3), (4, 5), (4, 6),
    (5, 1), (5, 4), (5, 7);
    (6, 4), (6, 5), (6, 6),
    (7, 1), (7, 6), (7, 7),
    (8, 3), (8, 5), (8, 6),
    (9, 1), (9, 4), (9, 7);