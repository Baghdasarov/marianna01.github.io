<?php
// Create two new DateTime-objects...
$date1 = new DateTime();
$date2 = new DateTime('2018-02-01T08:30:00');

// The diff-methods returns a new DateInterval-object...
$diff = $date2->diff($date1);

$hours = $diff->m;
$workedHours = round(($hours + ($diff->days*24))/3, 2);
$linesOfCode = round($workedHours * 43 * 3);
$timeOfFun = round($workedHours / 8, 2);

echo json_encode([
    "workedHours" => $workedHours,
    "linesOfCode" => $linesOfCode,
    "timeOfFun" => $timeOfFun,
    "happyClients" => 34,
    "teamMembers" => 7
]);

