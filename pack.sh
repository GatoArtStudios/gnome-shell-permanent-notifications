#! /bin/sh
rm -f permanent-notifications@bonzini.gnu.org.zip
git archive -v --format=zip -9 -o permanent-notifications@bonzini.gnu.org.zip HEAD
