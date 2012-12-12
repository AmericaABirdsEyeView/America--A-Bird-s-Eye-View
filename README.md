America--A-Bird-s-Eye-View
==========================

How to run tests
Navigate to the project directory and execute the following commmand from the command line.
>nosetests
--There is a test file to test the core sentiment algorithm, a test file to test the sentiment analyazer by state,
  and a test file to test the Hubs and Authorities algorithm.

  
How to Run Each Algorithm


Sentiment Algorithm

Navigate to the project directory and execute the following command from the command line.
> python sentiment.py filtered-tweets-filename.json
--Where filtered-tweets-filename.json is a filtered json file with a tweet per line to be read in
--This file reads in tweets seperates each tweet by state according to what is stored in the tweet's 'location' field.  It next analyzes the sentiment
  of the tweet, and writes the number of tweets and how they are classified to a text file named "StateCounts.txt" seperated by each state.

Hubs and Authorities Algorithm

Navigate to the project directory and execute the following commmand from the command line.
>python authority.py filtered-tweets-filename.json 
--Where filtered-tweets-filename.json is a filtered json file with a tweet per line to be read in, each filtered tweet should keep the 'retweeted_status' field
  and the 'retweet_count' field.
--The authorities code goes through the entire list of retweets within the tweet list and creates a list of the most retweeted tweets, hashtags, and URLS. It then 
prints the top 10 tweets, hashtags, and URLS to files respectively named topRetweets.json, topHashTags.txt, and topURLS.txt


How to Run The Website Locally
--Navigate to the website directory and run the index.html file.
--The full website should run locally on the host machine, however we only hosted the website on the internet, it has not been tested locally.