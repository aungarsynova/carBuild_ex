<?php
$user = "root";
$password = ""; //blank for windows, root for mac
$host = "localhost";
$db = "car_ex";

$conn = mysqli_connect($host, $user, $password, $db);
mysqli_set_charset($conn, 'utf8');

if (!$conn) {
    echo "connection didn't work...";
    exit;
}

//echo "connected!:)";

//get all the car data
//$myQuery = "SELECT * FROM mainmodel";

//make the query, get the result
//$result = mysqli_query($conn, $myQuery);

//$rows = array();

//while($row= mysqli_fetch_assoc($result)) {
//    $rows[] = $row;
//}

if (isset($_GET["carModel"])) { // check for a parametr
    $car = $_GET["carModel"];

    $myQuery = "SELECT * FROM mainmodel WHERE model = '$car'";
    

    $result = mysqli_query($conn, $myQuery);
    $rows = array();

    while($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
}

//send the entire resulr set as json encoded array
echo json_encode($rows);

?>