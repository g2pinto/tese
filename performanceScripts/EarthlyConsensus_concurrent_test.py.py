from sys import getsizeof
import time
import requests
import csv
import os
from concurrent.futures import ThreadPoolExecutor, as_completed

def send_request(test_num, poll_numb):
    start_time = time.time()
    API_ENDPOINT = "http://salinasgustavo.zapto.org:8082/api/v1/polls"
    data = {"poll":{"title":"Poll-cloud-rps1-test-base"+str(test_num)+"-"+str(poll_numb),"details":"","details_format":"html","default_duration_in_days":3,"poll_type":"poll","group_id":10,"closing_at":"2025-08-23T15:00:00.000Z","anonymous":False,"hide_results":"off","limit_reason_length":True,"shuffle_options":False,"notify_on_closing_soon":"undecided_voters","specified_voters_only":False,"tags":[],"notify_recipients":True,"recipient_user_ids":[],"recipient_chatbot_ids":[],"recipient_emails":[],"can_respond_maybe":True,"max_score":1,"min_score":1,"process_name":"Simple poll","process_subtitle":"Find the most popular option","poll_option_name_format":"plain","stance_reason_required":"optional","minimum_stance_choices":1,"maximum_stance_choices":1,"chart_type":"bar","document_ids":[],"poll_options_attributes":[{"name":"op1","meaning":"","prompt":"","icon":"agree","priority":0},{"name":"op2","meaning":"","prompt":"","icon":"agree","priority":1}],"link_previews":[],"files":[],"image_files":[]}}

    cookies= {"_loomio":os.environ["LOOMIO"],
            "csrftoken":os.environ["CSFRTOKEN"],
            "remember_user_token":os.environ["REMEMBERUSER"],
            "signed_in":	"1"}
    headers= {"X-CSRF-TOKEN" :os.environ["CSFRTOKEN"]}
    # sending post request and saving response as response object
    r = requests.post(url=API_ENDPOINT, json=data, cookies=cookies, headers=headers)
    # extracting response text
    pastebin_url = r.status_code
    #response = requests.get(url)
    #print("Response: " + str(pastebin_url))
    end_time = time.time()
    response_time = end_time - start_time
    throughput = getsizeof(data) / response_time
    
    return response_time, throughput

def measure_concurrent_performance():
    results = []

    for num_requests in [1, 10, 20, 25, 30, 35, 40, 45, 50, 100, 200]:
        response_times = []
        throughput = []
        
        start_time = time.time()  # Start time for this batch of requests
        
        with ThreadPoolExecutor(max_workers=num_requests) as executor:
            futures = [executor.submit(send_request, num_requests, i) for i in range(num_requests)]
            
            for future in as_completed(futures):
                response_time, throughput_value = future.result()
                response_times.append(response_time)
                throughput.append(throughput_value)
        
        end_time = time.time()  # End time for this batch of requests
        total_time = end_time - start_time  # Total time for sending all requests in this iteration

        avg_response_time = sum(response_times) / len(response_times)
        avg_throughput = sum(throughput) / sum(response_times)
        
        # Calculate requests per second (RPS)
        requests_per_second = num_requests / total_time
        
        print(f"{num_requests} Requests: Avg. Response Time = {avg_response_time:.4f} seconds, "
              f"Avg. Throughput = {avg_throughput/1024:.2f} KB/s, RPS = {requests_per_second:.2f}")
        
        results.append((num_requests, avg_response_time, avg_throughput / 1024, requests_per_second))
    
    return results

def save_results_to_csv(results, filename="concurrent_performance_results.csv"):
    with open(filename, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(["Number of Requests", "Average Response Time (s)", "Average Throughput (KB/s)", "Requests Per Second (RPS)"])
        
        for result in results:
            writer.writerow(result)
    
    print(f"Results saved to {filename}")

if __name__ == "__main__":
    
    results = measure_concurrent_performance()
    save_results_to_csv(results)
