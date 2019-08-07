package com.joesharp.database;

import java.sql.*;
import java.util.logging.Logger;

public class BasicDb {
    private static final Logger LOGGER = Logger.getLogger("Main");

    // JDBC driver name and database URL
    static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
    static final String DB_URL = "jdbc:mysql://localhost:3306/gym";

    //  Database credentials
    static final String USER = "gym_admin";
    static final String PASS = "workout-password";

    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;
        try{
            //STEP 2: Register JDBC driver
            Class.forName(JDBC_DRIVER);

            //STEP 3: Open a connection
            LOGGER.info("Connecting to database...");
            conn = DriverManager.getConnection(DB_URL,USER,PASS);

            //STEP 4: Execute a query
            LOGGER.info("Creating statement...");
            stmt = conn.createStatement();
            String sql;
            sql = "SELECT memberID, name, address, age FROM gym_member";
            ResultSet rs = stmt.executeQuery(sql);

            //STEP 5: Extract data from result set
            while(rs.next()){
                //Retrieve by column name
                final int id  = rs.getInt("memberID");
                final String name = rs.getString("name");
                final String address = rs.getString("address");
                final int age = rs.getInt("age");

                //Display values
                LOGGER.info(String.format("ID: %d, Name: %s, Address: %s, Age: %d", id, name, address, age));
            }
            //STEP 6: Clean-up environment
            rs.close();
            stmt.close();
            conn.close();
        } catch(Exception e) {
            //Handle errors for Class.forName
            LOGGER.warning(e.getLocalizedMessage());
        } finally {
            //finally block used to close resources
            try {
                if(stmt!=null)
                    stmt.close();
            } catch (SQLException se2){
                LOGGER.warning(se2.getLocalizedMessage());
            }// nothing we can do
            try {
                if (conn!=null) {
                    conn.close();
                }
            } catch (SQLException se){
                se.printStackTrace();
            }//end finally try
        }//end try
        LOGGER.info("Goodbye!");
    }
}
