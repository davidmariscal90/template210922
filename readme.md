@react-native-async-storage/async-storage
npm install @react-native-async-storage/async-storage
npm install @react-native-camera-roll/camera-roll --save
npm i @react-native-masked-view/masked-view

npm install @react-native-community/image-editor --save

{% if product.metafields.loox.num_reviews %}

<script id="looxSchemaJson" type="application/ld+json">
{
	"@context": "http://schema.org",
	"@type": "Product",
	"@id": {{ canonical_url | json }},
	"aggregateRating": {
		"@type": "AggregateRating",
		"ratingValue": "{{ product.metafields.loox.avg_rating }}",
		"reviewCount": "{{ product.metafields.loox.num_reviews }}"
	},
	"name": {{ product.title | json }}
}
</script>

{% endif %}

    <div id="looxReviews" data-product-id="{{product.id}}" class="loox-reviews-default">{{ product.metafields.loox.reviews }}</div>
