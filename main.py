import requests
from bs4 import BeautifulSoup
import os
import json
import datetime

loosers_url = 'https://puppeteer-jibberish-deploy-cb9882febdc1.herokuapp.com'
loosers_response = requests.get(loosers_url)
result_json_content = loosers_response

loosers_json_filename = 'docs/result.json'
if os.path.exists(loosers_json_filename):
  os.remove(loosers_json_filename)

with open(loosers_json_filename, 'a') as loosers_json_file:
  loosers_json_file.write(result_json_content.text)
  loosers_json_file.close
