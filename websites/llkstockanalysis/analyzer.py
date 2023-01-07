import pandas as pd
import numpy as np
import requests


FINNHUB_API_KEY = 'cenm8nqad3i2t1u15q7gcenm8nqad3i2t1u15q80'
IEX_API_KEY = 'pk_5a6fb9c44b914317a0a42b1b19f4ea61'


STOCK = 'ag'

IEX = f'https://YOUR_WORKSPACE.iex.cloud/v1/data/core/quote/{STOCK}?token={IEX_API_KEY}'


resp = requests.get(IEX)

print(resp)

resp = resp.json()

print(resp)