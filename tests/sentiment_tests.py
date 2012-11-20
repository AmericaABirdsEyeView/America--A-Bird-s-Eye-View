#!/usr/bin/env python
# script to test your pagerank algorithm

import unittest
import math

import sentiment


EMOTE_TWEETS = dict(
    positive = [
        dict(text="Today is amazing! :)"),
        dict(text="I am happy today! :)"),
    ],
    negative = [
        dict(text="That stinks! :("),
        dict(text="I am sad! :("),
    ],
)


class TestSentiment(unittest.TestCase):

    def test_training(self):
        analyzer = sentiment.SentimentAnalyzer()
        analyzer.train_on_filtered(EMOTE_TWEETS)
        neg_probs = analyzer.term_prob['negative']
        self.assertAlmostEqual(neg_probs['sad'],math.log(2.0/10))
        # this has a probability for negative sentiment because of plus one
        # smoothing.
        self.assertAlmostEqual(neg_probs['today'],math.log(1.0/10))

    def test_sentiment(self):
        analyzer = sentiment.SentimentAnalyzer()
        analyzer.train_on_filtered(EMOTE_TWEETS)

        for key in EMOTE_TWEETS:
            for tweet in EMOTE_TWEETS[key]:
                predicted = analyzer.sentiment(tweet)
                self.assertEqual(predicted,key)

if __name__ == '__main__':
    unittest.main()
