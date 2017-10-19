package database

import (
    "log"
    "time"

    "github.com/jmoiron/sqlx"
    _ "github.com/go-sql-driver/mysql"
)

var SQL *sqlx.DB

func Connect(dsn string) error {
    var err error

    if SQL, err = sqlx.Connect("mysql", dsn); err != nil {
        log.Println("SQL Driver Error", err)
        return err
    }

    return nil
}


// Timestamp parsing

// Parses
func parseDbTimestamp(timestamp *string) time.Time {
    time, _ := time.Parse("2006-01-02 15:04:05", *timestamp)

    return time
}

func timeToDb(timestamp *time.Time) string {
    time := timestamp.Format("2006-01-02 15:04:05")
    return time
}
