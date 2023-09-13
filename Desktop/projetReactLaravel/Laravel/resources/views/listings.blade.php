<h1>{{$heading}}</h1>
  @unless(($listing) == 0)

  @foreach($listing as $listing)
    <h2>
      {{$listing ['title']}}  
    </h2>
    <p>
       {{$listing ["description"]}}
    </p>
  @endforeach
  @else
       <p>No listings Found</p>
  @endunless