import time
import requests
import csv
from concurrent.futures import ThreadPoolExecutor, as_completed

def send_request(poll_numb):
    start_time = time.time()
    API_ENDPOINT = "http://ecomonitor.zapto.org:8888/query/newdata/noise-pollution-at-salinas-do-samouco/30/decibels"
    # sending post request and saving response as response object
    r = requests.post(url=API_ENDPOINT)
    # extracting response text
    pastebin_url = r.status_code
    #response = requests.get(url)
    print("Response: " + str(pastebin_url))
    end_time = time.time()
    response_time = end_time - start_time
    
    return response_time

def measure_concurrent_performance(url, max_requests):
    results = []

    for num_requests in range(1, max_requests + 1):
        response_times = []
        
        with ThreadPoolExecutor(max_workers=num_requests) as executor:
            futures = [executor.submit(send_request, url) for _ in range(num_requests)]
            
            for future in as_completed(futures):
                response_time = future.result()
                response_times.append(response_time)
        
        avg_response_time = sum(response_times) / len(response_times)
        
        print(f"{num_requests} Requests: Avg. Response Time = {avg_response_time:.4f} seconds")
        
        results.append((num_requests, response_time))
    
    return results

def save_results_to_csv(results, filename="concurrent_performance_results.csv"):
    with open(filename, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(["Number of Requests", "Average Response Time (s)", "Average Throughput (KB/s)"])
        
        for result in results:
            writer.writerow(result)
    
    print(f"Results saved to {filename}")

if __name__ == "__main__":
    
    results = measure_concurrent_performance(1000)
    save_results_to_csv(results)
