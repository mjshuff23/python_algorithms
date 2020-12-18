# -------------------------------------------------------------------------------------- #
# Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

# -------------------------------------------------------------------------------------- #


def bubble_sort(array):
    # Loop through entire array
    for i in range(len(array) - 1):
        # Last i elements are already in place
        for j in range(len(array) - i - 1):
            # Traverse the array from 0 to len(array)-i-1
            # Swap if the element found is greater than the next element
            if array[j] > array[j + 1]:
                array[j], array[j + 1] = array[j + 1], array[j]


array = [64, 34, 25, 12, 22, 11, 90]
print(array)
bubble_sort(array)
print(array)
