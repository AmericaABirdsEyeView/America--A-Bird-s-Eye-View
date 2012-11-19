#!/usr/bin/env python
import requests
import os
import time
import sys

# This reads tweets from Twitter's streaming API and writes them to a file.
# See Twitter's documentation here:
# https://dev.twitter.com/docs/api/1/post/statuses/filter
# You will need to change the SCREEN_NAME and PASSWORD below.
def getTweets(n):
    r = requests.post(
            'https://stream.twitter.com/1/statuses/filter.json',
            data={'track': 'obama,barack obama,president barack obama,barack, president, president obama', 'location':'48.987386,18.005611,-124.626080,-62.361014'},
            auth=('wesweaver25', 'smokey7kate'), 
            prefetch=False
            )

    count = 0
    output = open('tweets.%d.json'%n,'w')

    for line in r.iter_lines():
        if line: # filter out keep-alive new lines
            print>>output, line
            count +=1
            if count%10000==0:
                print str(count) + " tweets downloaded..."
            if count == 50000:
                print "Finished run " + str(n)
                return
def main():
    for x in range(1,576):
        print "Beginning run " + str(x)
        getTweets(x)
        print "Waiting 1 hour before next run..."
        time.sleep(3600)


if __name__ == "__main__":
    main()                