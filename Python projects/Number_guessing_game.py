import random

num = random.randint(1, 100)
attempt =0

while True:
  try:
    guess = int(input("Enter a number between 1 and 100: "))
  except ValueError:
    print("Please enter a valid number")
    continue
  if guess < num:
    print("Too low")
    attempt+=1
  elif guess > num: 
    print("Too high")
    attempt+=1
  else:
    print("You guessed it!")
    attempt+=1
    break 


print("You guessed it in",attempt, "tries")