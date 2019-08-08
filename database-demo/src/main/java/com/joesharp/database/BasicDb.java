package com.joesharp.database;

import java.sql.*;
import java.util.logging.Logger;

public class BasicDb {
    private static final Logger LOGGER = Logger.getLogger("Main");

    // Database URL
    private static final String DB_URL = "jdbc:mysql://localhost:3306/gym";

    //  Database credentials
    private static final String USER = "gym_admin";
    private static final String PASS = "workout-password";

    public static void main(final String[] args) {
        Connection conn = null;
        Statement stmt = null;
        try{
            // Get a connection using the URL
            conn = DriverManager.getConnection(DB_URL, USER, PASS);

            // Create a statement
            stmt = conn.createStatement();

            // Construct SQL
            String sql = "SELECT memberID, name, address, age FROM gym_member";

            // Run the Query
            ResultSet rs = stmt.executeQuery(sql);

            // Extract data from result set
            while(rs.next()){
                // Retrieve by column name
                final int id  = rs.getInt("memberID");
                final String name = rs.getString("name");
                final String address = rs.getString("address");
                final int age = rs.getInt("age");

                // Display values
                LOGGER.info(String.format("ID: %d, Name: %s, Address: %s, Age: %d", id, name, address, age));
            }
            //STEP 6: Clean-up environment
            rs.close();
            stmt.close();
            conn.close();
        } catch (Exception e) {
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
