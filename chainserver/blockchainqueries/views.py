from django.shortcuts import render
from django.http import HttpResponse
from .forms import TitleQueryForm
from django.shortcuts import HttpResponse, redirect
import subprocess
from datetime import datetime
import json
import uuid


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")



def query_poll_view(request): 
    # check if the request is post 
    if request.method =='POST':  
 
        # Pass the form data to the form class
        details = TitleQueryForm(request.POST)
        print("heyhey")
        if True:#details.is_valid():  
            print(".............")
            title = request.POST["title"]
            asset = request.POST["asset"]
            print(title)

            if asset == "Poll":
                output = subprocess.getoutput("./QueryPollTitle.sh " + title)
                print(output)
                return HttpResponse("title: " + title)
            elif asset == "Data":
                output = subprocess.getoutput("./QueryDataTitle.sh " + title)
                print(output)
                return HttpResponse("title: " + title + "<br>response: " + output)
             
        #else:
         
            # Redirect back to the same page if the data
            # was invalid
            #return render(request, "novo_bilhete.html", {'form':details})  

    context ={} 
    context['form']= TitleQueryForm()
    #context['lugares disponiveis'] = 
    return render(request, "PollQuery.html", context) 



def new_data_view(request, title, value, unit):
    print(title)
    print(value)
    time = datetime.now()
    print(time)

    #output = subprocess.getoutput("curl -X POST http://localhost:11434/api/generate -s -d '{\"model\": \"llama3\",\"prompt\":\" The "+title+" was " + value + unit +". Make a 5 line text of this information in a way which unexperienced individuals understand whether the value is high or low compared to the average " + title + ". Present just the text without any introduction and no double quotes.\",\"stream\": false}'")
    #print(output)
    #output_json = json.loads(output)
    #print(output_json["response"])

    
    random_uuid = uuid.uuid4()
    print(random_uuid)

    #output_chain = subprocess.getoutput("./CreateData.sh " + random_uuid + " "+ title + " " + value + " " + time)
    #print(output_chain)

    return HttpResponse("request" + title + "," + str(value) + ", " + str(time) + "<br><br>Response:<br>")
