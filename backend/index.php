<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Include CRUD operations
include_once "crud.php";

// Route requests based on the 'action' parameter
$action = $_GET["action"] ?? "";

switch ($action) {
    case "create":
        create_item();
        break;
    case "read":
        read_items();
        break;
    case "update":
        update_item();
        break;
    case "delete":
        delete_item();
        break;
    default:
        http_response_code(404);
        echo json_encode(["error" => "Invalid action"]);
}
