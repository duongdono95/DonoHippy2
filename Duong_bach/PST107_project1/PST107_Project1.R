options(max.print = 10000)


#install relevant packages
install.packages("tidyverse")
install.packages("skimr")
install.packages("plotly")


#load the packages
library(tidyverse)
library(skimr)
library(plotly)

hostel_data <- read.csv("~/Desktop/PST107_project1/Hostel.csv")
head(hostel_data)
summary(hostel_data)
print(summary(hostel_data))

# View the first few rows of the dataset
head(hostel_data)

# Get a summary of the dataset
skim(hostel_data)

# clean the table by rename the header titles to the specific type.
hostel_data <- hostel_data %>%
  rename(
    Hostel_Name = hostel.name,
    Starting_Price = price.from,
    Summary_Score = summary.score,
    Rating = rating.band,
    Atmosphere = atmosphere,
    Cleanliness = cleanliness,
    Facilities = facilities,
    Location = location.y,
    Security = security,
    Staff = staff,
    Worth = valueformoney,
  )

# remove the unnecessary columns(lon and lat)
hostel_data <- hostel_data %>%
  select(-lon, -lat)

# remove rows have empty value
hostel_data_cleaned <- na.omit(hostel_data)
print(hostel_data_cleaned)

#1. Finding the everage value of each attribute in each city.
# calculate the average value of each attribute and then analyze them by Sumarise method
# the results is the average values of each attribute in each city.
# the number of hotel in each city is counted and saved to Acc by method n()
reviews_by_city <- hostel_data_cleaned %>%
  group_by(City) %>%
  summarise(Worthiness=mean(Worth), Atmosphere_Ave=mean(Atmosphere),
            Loc_Ave=mean(Location),Staff_Ave=mean(Staff),
            Price_Ave=mean(Starting_Price),Clean_Ave=mean(Cleanliness),
            Fac_Ave=mean(Facilities),Sec_Ave=mean(Security),Acc=n(),Dist_Ave=mean(Distance))
print(reviews_by_city)

#2. Finding What is the available value (concenstration) of hostel among each city
# the data is shown in pie chart -> easy to track and evaluate the data.
Hotel_Concenstration = plot_ly(data=reviews_by_city, labels = ~City, values = ~Acc , type= 'pie')
print(Hotel_Concenstration)

#3. Finding Which city offers good budget hostel & close to city centre?
# the Starting_Price value is determined by summary(hostel_data).Starting_Price
# the Summary_Score value is determined by summary(hostel_data).Summary_Score
# the Location value is determined by summary(hostel_data).Location
Good_Price_Hostel = hostel_data_cleaned %>%
  group_by(City) %>%
  filter(Starting_Price <= 3000, 'Summary_Score' > 8, Location > 8) %>%
  summarise(Worthiness=mean(Worth), Atmosphere_Ave=mean(Atmosphere),
            Loc=mean(Location),St=mean(Staff),
            Price=mean(Starting_Price),Clean=mean(Cleanliness),
            Fac=mean(Facilities),Sec=mean(Security),Acc=n(),Dist=mean(Distance))
data.frame(Good_Price_Hostel)

#4. As a Budget traveller, finding the hotels offering the best location at affordable price to explore city
On_Budget_Hostel = hostel_data_cleaned %>%
  filter(Starting_Price <= 2000,Location >= 9, Distance <=2.3)%>%
  select(Hostel_Name,City,Starting_Price, Distance)
print(On_Budget_Hostel)

#5. In case there is no budget limitation for travelling, finding the luxuries hotels in Japan
Luxury_Hostel = hostel_data_cleaned %>%
  filter(Starting_Price >= 5000)%>%
  select(Hostel_Name, Starting_Price, City, Atmosphere, Cleanliness, Worth, Staff, Facilities)
print(Luxury_Hostel)