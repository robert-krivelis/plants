import plotly

import requests
import time
 

def main():
	t1_start = time.perf_counter()
	while (1):
		try:
			if ((t1_start//1)%3)==0: #let me know if you find a better way to 
				a = random(50,60)
				
			# a = requests.get('https://api.particle.io/v1/devices/350025000b47363339343638/moisturePercentage?access_token=76dfed92eeaa0242b1b2a9366736589ecdc1b73f')
			# moisture = a.json()['result']
			
			# print(f'{t1_start},{moisture}')
		except KeyboardInterrupt:
			break
main()