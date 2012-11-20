#!/usr/bin/env python
# script to test your index and search engine
#
# You should add tests here, but you should not remove any of the tests in
# this file.

import unittest
import ujson
import twitterAuthority
import utils
import fileinput




SENTIMENT_CORPUS = [
    {
        "text":"This is bad.  I hate Obama's policies >:[",
        "id":1,
        "user":{"id":4,"screen_name":"Diane","location":"Texas"},
        "retweeted_status":{"retweet_count":5}
    },
    {
        "text":"I can't believe Obama won.  Yay!! :-)",
        "id":2,
        "user":{"id":3,"screen_name":"charlie","location":"Houston, Tx"},
        "retweeted_status":{"retweet_count":3}        
    },
    {
        "text":"Obama is bad.  I hate his policies. >:[",
        "id":3,
        "user":{"id":2,"screen_name":"BOB","location":"New York, NY"},
        "retweeted_status":{"retweet_count":2}        
    },
    {
        "text":"This election is bad for america.  Obama hates America. >:[",
        "id":4,
        "user":{"id":1,"screen_name":"Alice","location":"Greenbow,Alabama"},
        "retweeted_status":{"retweet_count":1}        
    },
    {
        "text":"Obama won! Yay.  He is a great president. :-)",
        "id":5,
        "user":{"id":10,"screen_name":"Alice","location":"College Station, Texas"},
        "retweeted_status":{"retweet_count":7}        
    },
    {
        "text":"Obama is a great president.  I can't believe he won. :-)",
        "id":6,
        "user":{"id":11,"screen_name":"Alice","location":"Tuscaloosa, AL"},
        "retweeted_status":{"retweet_count":3}        
    },
    {
        "text":"Obama is a hateful man.  He is bad for America.",
        "id":7,
        "user":{"id":12,"screen_name":"Alice","location":"NY"},
        "retweeted_status":{"retweet_count":9}        
    },
    {
        "text":"This is so great! Obama won he is our president!",
        "id":8,
        "user":{"id":13,"screen_name":"Alice","location":"Alabama"},
        "retweeted_status":{"retweet_count":2}        
    }
]


class TestAuthority(unittest.TestCase):
    def setUp(self):
        # this method runs before each test
        twitterAuthority.getRetweetCounts(SENTIMENT_CORPUS)


    def test_authorities(self):
        ids = open('topRetweets.txt','r')
        retweetIds = []
        expectedIds = [7,5,1,6,2,8,3,4]
        for line in ids:
            retweetIds.append(int(line))
        
        self.assertNotEqual(0, len(retweetIds), "Empty list not expected")
        
        for num in range(0,8):
            self.assertEqual(expectedIds[num], retweetIds[num], "Expected tweet ID does not match")
        
            
        ids.close()

if __name__ == '__main__':
    unittest.main()
