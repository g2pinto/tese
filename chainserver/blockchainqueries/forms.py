from django import forms  


# creating a form   
class TitleQueryForm(forms.Form): 
    QUERY_CHOICES =( 
        ("Poll", "Poll"),
        ("Data", "Data"), 
    ) 
    asset=forms.MultipleChoiceField(widget=forms.Select(choices=QUERY_CHOICES), choices=QUERY_CHOICES)
    title = forms.CharField(max_length=200)