import matplotlib.pyplot as plt

# Data
x = [1, 2, 3, 4, 5]
y = [10, 20, 15, 25, 30]

# Create line graph
plt.plot(x, y, marker='o')

# Add title and labels
plt.title("Simple Line Graph")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")

# Show grid
plt.grid(True)

# Display graph
plt.show()