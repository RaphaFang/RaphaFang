# from replit import clear
import os
def clear():  # Cross-platform clear screen
    os.system('cls' if os.name == 'nt' else 'clear')



from art import logo
print(logo)
print("Welcome to the secret auction program.")

dic_for_all = {}
more_bidder = "yes"
while more_bidder == "yes":
    name = input("What is your name?\n")
    bid = int(input("What's your bid?\n"))
    more_bidder = input("Are there any more bidders? Type 'yes' or 'no'\n")
    dic_for_all[name] = bid
    clear()

# print(dic_for_all)
## a check point

winner=["", 0]
biggist = 0
for n in dic_for_all:
    if dic_for_all[n] > biggist:
        biggist = dic_for_all[n]
        winner[0] = n
        winner[1] = biggist

print(f"The winner is {winner[0]} with a bid of ${winner[1]}.")