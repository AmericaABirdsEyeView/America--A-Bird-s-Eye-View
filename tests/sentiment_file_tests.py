#!/usr/bin/env python
# script to test your index and search engine
#
# You should add tests here, but you should not remove any of the tests in
# this file.

import unittest

import sentiment
import utils
import fileinput




SENTIMENT_CORPUS = [
    {
        "text":"This is bad.  I hate Obama's policies >:[",
        "id":1,
        "user":{"id":4,"screen_name":"Diane","location":"Texas"}
    },
    {
        "text":"I can't believe Obama won.  Yay!! :-)",
        "id":2,
        "user":{"id":3,"screen_name":"charlie","location":"Houston, Tx"}
    },
    {
        "text":"Obama is bad.  I hate his policies. >:[",
        "id":3,
        "user":{"id":2,"screen_name":"BOB","location":"New York, NY"}
    },
    {
        "text":"This election is bad for america.  Obama hates America. >:[",
        "id":4,
        "user":{"id":1,"screen_name":"Alice","location":"Greenbow,Alabama"}
    },
    {
        "text":"Obama won! Yay.  He is a great president. :-)",
        "id":5,
        "user":{"id":1,"screen_name":"Alice","location":"College Station, Texas"}
    },
    {
        "text":"Obama is a great president.  I can't believe he won. :-)",
        "id":6,
        "user":{"id":1,"screen_name":"Alice","location":"Tuscaloosa, AL"}
    },
    {
        "text":"Obama is a hateful man.  He is bad for America.",
        "id":7,
        "user":{"id":1,"screen_name":"Alice","location":"NY"}
    },
    {
        "text":"This is so great! Obama won he is our president!",
        "id":8,
        "user":{"id":1,"screen_name":"Alice","location":"Alabama"}
    }
]


class TestSentiment(unittest.TestCase):
    def setUp(self):
        # this method runs before each test
            analyzer = sentiment.SentimentAnalyzer()
            filtered = sentiment.filter_classes(SENTIMENT_CORPUS)
            analyzer.train_on_filtered(filtered)
            filtered1 = sentiment.filter_classes(SENTIMENT_CORPUS)   
            sentiment.analyzeByState(analyzer,SENTIMENT_CORPUS)

    def test_classifier(self):
        # read in the output file and verify that tweets and states line up
        states = ['Alabama','New York','Texas']
        lines = []
        for line in fileinput.input("StateCounts.txt"):
            lines.append(line)
        
        #check Tweets for Alabama should be 2 positive and 1 negative
        Alabama = sentiment.tokenize(lines[0])
        self.assertEqual(Alabama[0],'alabama')
        self.assertEqual(Alabama[1],'2')
        self.assertEqual(Alabama[2],'1')
        
        #check tweets for new york should be 0 positive and 2 negative
        NewYork = sentiment.tokenize(lines[1])
        self.assertEqual(NewYork[0] + NewYork[1],'newyork')
        self.assertEqual(NewYork[2],'0')
        self.assertEqual(NewYork[3],'2')   

        #check Tweets for Texas should be 2 positive and 1 negative
        Texas = sentiment.tokenize(lines[2])
        self.assertEqual(Texas[0],'texas')
        self.assertEqual(Texas[1],'2')
        self.assertEqual(Texas[2],'1')        

if __name__ == '__main__':
    unittest.main()
