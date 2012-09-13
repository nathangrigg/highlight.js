#!/usr/bin/python

import argparse
import sys
import re

DEFAULT = "applescript bash gnuplot python tex xml diff perl".split()
TITLE_RE = re.compile(r'\("(.*?)"\):$')

def parse(text, filter):
    """Returns generator of a filtered, structured version of classref"""
    language = ""
    for line in text:
        new_language = TITLE_RE.search(line)
        if new_language:
            language = new_language.group(1)
        elif language in filter:
            cols = line.split(None, 1)
            if len(cols) == 2:
                yield (cols[0], language, cols[1])

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Filter and sort classref.txt")
    parser.add_argument("languages", metavar="language", nargs="*",
      default=DEFAULT, help="name of language")
    args = parser.parse_args()

    with open('classref.txt', 'r') as f:
        lines = list(parse(f, args.languages))

    lines.sort()
    for line in lines:
        print "{0:11} {1:11} {2}".format(*line),
