1) The bug was that the numbers were being concatenated, not added.
2) I fixed this by casting the variables num1 and num2 using parseInt() to be ints so they are added and not treated as strings.