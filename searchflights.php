<?php
include "db.php";

$source = $_GET['source'];
$dest   = $_GET['dest'];

$stmt = $conn->prepare("
SELECT f.flight_number, f.price, 
       src.city AS source, 
       dest.city AS destination
FROM flights f
JOIN airports src ON f.source_airport = src.airport_id
JOIN airports dest ON f.destination_airport = dest.airport_id
WHERE src.airport_code = ? AND dest.airport_code = ?
");

$stmt->execute([$source, $dest]);
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);
?>
