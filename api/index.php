<?php
require_once("./config.php");

// Connect to the database
$pdo = new PDO(
    "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME,
    DB_USER, DB_PASSWORD
);

$msgTable = "PortfolioMessages";

/**
 * Create the table if it does not exist.
 */
function init_db() {
    global $pdo, $msgTable;

    $stmt = $pdo->prepare("SHOW TABLES LIKE :table");
    $stmt->bindParam(":table", $msgTable, PDO::PARAM_STR);
    $stmt->execute();

    // Does msgTable exist?
    if ($stmt->rowCount() > 0) {
        return;
    }

    // Create table
    try {
        $pdo->exec("CREATE TABLE $msgTable (
            id int AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(200),
            username VARCHAR(200),
            message VARCHAR(500),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )");
    } catch (PDOException $e) {
        echo "Error creating $msgTable -> " . $e->getMessage();

        http_response_code(500);
        die();
    }
}


/**
 * Append a message to the database.
 *
 * @param email - The email to insert.
 * @param name - The name to insert.
 * @param message - The message to insert.
 */
function append_message($email, $name, $message) {
    global $pdo, $msgTable;

    try {
        $stmt = $pdo->prepare("INSERT INTO $msgTable (
            email,
            username,
            message
        ) VALUES (:username, :email, :message)");

        // Bind values
        $stmt->bindParam(":username", $name, PDO::PARAM_STR);
        $stmt->bindParam(":email", $email, PDO::PARAM_STR);
        $stmt->bindParam(":message", $message, PDO::PARAM_STR);

        $stmt->execute();

        http_response_code(200);
    } catch(PDOException $e) {
        echo "Error saving $email -> " . $e->getMessage();

        http_response_code(500);
        die();
    }

    $pdo = null;
}

// Setup
init_db();

// Attempt to parse user input & insert
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (
        (!isset($_POST["email"]) || empty($_POST["email"])) ||
        (!isset($_POST["name"]) || empty($_POST["name"])) ||
        (!isset($_POST["message"]) || empty($_POST["message"]))
    ) {
        echo "Invalid request!";

        http_response_code(400);
        die();
    }

    append_message(
        $_POST["email"],
        $_POST["name"],
        $_POST["message"],
    );
}
?>
