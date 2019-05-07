# ![LOGO](logo.png) Getty Images **flow**ground Connector

## Description

A generated **flow**ground connector for the Getty Images API (version 3).

Generated from: https://api.apis.guru/v2/specs/gettyimages.com/3/swagger.json<br/>
Generated at: 2019-05-07T17:40:54+03:00

## API Description

Build applications using the world's most powerful imagery

## Authorization

Supported authorization schemes:
- API Key
## Actions

### Search for images by a photographer

*Tags:* `Artists`

#### Input Parameters
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `Authorization` - _optional_ - Provide access token in the format of 'Bearer {token}'.
* `artist_name` - _required_ - Name of artist for desired images
* `fields` - _optional_ - Comma separated list of fields. Allows restricting which fields are returned. If no fields are selected, the summary_set of fields are returned.
* `page` - _optional_ - Identifies page to return. Default page is 1.
* `page_size` - _optional_ - Specifies page size. Default page_size is 10, maximum page_size is 100.

### Search for videos by a photographer

*Tags:* `Artists`

#### Input Parameters
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `Authorization` - _optional_ - Provide access token in the format of 'Bearer {token}'.
* `artist_name` - _required_ - Name of artist for desired images
* `fields` - _optional_ - Comma separated list of fields. Allows restricting which fields are returned. If no fields are selected, the summary_set of fields are returned.
* `page` - _optional_ - Identifies page to return. Default page is 1.
* `page_size` - _optional_ - Specifies page size. Default page_size is 10, maximum page_size is 100.

### Get asset change notifications.

> # Asset Changes<br/>
> <br/>
> Get notifications about new, updated or deleted assets.<br/>
> <br/>
> ##  Quickstart<br/>
> <br/>
> You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.<br/>
> Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. <br/>
> <br/>
>     <br/>
> Partner channels that have not been checked within the last 120 days will be removed and that partner will no longer be able <br/>
> to get change notifications from that channel.<br/>
> Partners who would like to start using the Asset Changes API again after a period of dormancy should contact their sales<br/>
> representative to be set up again.

*Tags:* `AssetChanges`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `channel_id` - _required_ - Specifies the id of the channel for the asset data. Valid channel ids can be found in the results of the Get Partner Channel query.
* `batch_size` - _optional_ - Specifies the number of assets to return. The default is 10; maximum is 500.

### Confirm asset change notifications.

> # Delete Asset Changes<br/>
> <br/>
> Confirm asset changes acknowledges receipt of asset changes (from the PUT asset changes endpoint).<br/>
> <br/>
> ##  Quickstart<br/>
> <br/>
> You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.<br/>
> Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.

*Tags:* `AssetChanges`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `change-set-id` - _required_

### Get a list of asset change notification channels.

> # Get Partner Channels<br/>
> <br/>
> Retrieves the channel data for the partner. This data can be used to populate the channel_id parameter in the Put Asset Changes query.<br/>
> <br/>
> ##  Quickstart<br/>
> <br/>
> You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.<br/>
> Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. <br/>
> <br/>
> Only channels that have been queried in the last 120 days will be included in the list of channels.<br/>
> Partners who have a channel that has been removed should contact their sales representative to be set up again.

*Tags:* `AssetChanges`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.

### Endpoint for acquiring extended licenses with iStock credits for an asset.

*Tags:* `AssetLicensing`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `assetId` - _required_ - Getty Images assetId - examples 520621493, 112301284

### Get all boards that the user participates in

> Boards are where you collect, curate, collaborate on and manage photo and video assets in one place. More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq). Use this endpoint to retrieve all Boards available for a user.<br/>
> <br/>
> You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.

*Tags:* `Boards`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `board_relationship` - _optional_ - Search for boards the user owns or has been invited to as an editor.
    Possible values: owned, invited.
* `page` - _optional_ - Request results starting at a page number (default is 1).
* `pageSize` - _optional_ - Request number of boards to return in each page. (default is 30).
* `sort_order` - _optional_ - Sort the list of boards by last update date or name. Defaults to date_last_updated_descending.
    Possible values: date_last_updated_descending, date_last_updated_ascending, name_ascending, name_decending.

### Create a new board

> Boards are where you collect, curate, collaborate on and manage photo and video assets in one place. More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq). Use this endpoint to create a Board by a specific id.<br/>
> <br/>
> You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.<br/>
> <br/>
> **NOTE:** *The input to this endpoint is not sanitized in any way, so it is the responsibility of the client to ensure that it is properly formatted and guards against malicious data (for example cross-site scripting attacks or HTML injection) when accessing the data.*

*Tags:* `Boards`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.

### Delete a board

> Boards are where you collect, curate, collaborate on and manage photo and video assets in one place. More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq). Use this endpoint to delete a Board by a specific id.<br/>
> <br/>
> You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.

*Tags:* `Boards`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `board_id` - _required_

### Get assets and metadata for a specific board

> Boards are where you collect, curate, collaborate on and manage photo and video assets in one place. More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq). Use this endpoint to retrieve a Board by a specific id.<br/>
> <br/>
> You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.

*Tags:* `Boards`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `board_id` - _required_

### Update a board

> Boards are where you collect, curate, collaborate on and manage photo and video assets in one place. More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq). Use this endpoint to update a Board by a specific id.<br/>
> <br/>
> You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.<br/>
> <br/>
> **NOTE:** *The input to this endpoint is not sanitized in any way, so it is the responsibility of the client to ensure that it is properly formatted and guards against malicious data (for example cross-site scripting attacks or HTML injection) when accessing the data.*

*Tags:* `Boards`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `board_id` - _required_

### Remove assets from a board

> Boards are where you collect, curate, collaborate on and manage photo and video assets in one place. More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq).<br/>
> Use this endpoint to remove a set of assets from a board.<br/>
> <br/>
> You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.

*Tags:* `Boards`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `board_id` - _required_
* `asset_ids` - _required_ - List the assets to be removed from the board.

### Add assets to a board

> Boards are where you collect, curate, collaborate on and manage photo and video assets in one place. More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq).<br/>
> Use this endpoint to add a set of assets to a board.<br/>
> <br/>
> You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.

*Tags:* `Boards`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `board_id` - _required_

### Remove an asset from a board

> Boards are where you collect, curate, collaborate on and manage photo and video assets in one place. More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq). Use this endpoint to remove an asset from a board.<br/>
> <br/>
> You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.

*Tags:* `Boards`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `asset_id` - _required_
* `board_id` - _required_

### Add an asset to a board

> Boards are where you collect, curate, collaborate on and manage photo and video assets in one place.<br/>
> More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq). Use this endpoint to add an asset to a board.<br/>
> <br/>
> You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.<br/>
> Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.

*Tags:* `Boards`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `asset_id` - _required_
* `board_id` - _required_

### Get comments from a board

> Boards are where you collect, curate, collaborate on and manage photo and video assets in one place. More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq). Use this endpoint to retrieve all comments for a specific board.<br/>
> <br/>
> You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.

*Tags:* `Boards`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `board_id` - _required_

### Add a comment to a board

> Boards are where you collect, curate, collaborate on and manage photo and video assets in one place. More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq).<br/>
> Use this endpoint to add a comment to a board.<br/>
> <br/>
> You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.

*Tags:* `Boards`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `board_id` - _required_

### Delete a comment from a board

> Boards are where you collect, curate, collaborate on and manage photo and video assets in one place. More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq).<br/>
> Use this endpoint to delete a comment from a board.<br/>
> <br/>
> You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.

*Tags:* `Boards`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `board_id` - _required_
* `comment_id` - _required_

### Gets collections applicable for the customer.

> Use this endpoint to retrieve collections associated with your Getty Images account. To browse available collections see our [Image collections page]( http://www.gettyimages.com/creative-images/collections).<br/>
> <br/>
> You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.

*Tags:* `Collections`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.

### Gets countries codes and names.

> Returns a list of country objects that contains country name, two letter ISO abbreviation and three letter ISO abbreviation.<br/>
> <br/>
> You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.

*Tags:* `Countries`

#### Input Parameters
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `Authorization` - _optional_ - Provide access token in the format of 'Bearer {token}'.

### Returns information about the current user.

> Returns the first, middle and last name of the authenticated user.<br/>
> <br/>
> You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. <br/>
> 	<br/>
> Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.

*Tags:* `Customers`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.

### Returns information about a customer's downloaded assets.

> Returns information about a customer's previously downloaded assets.<br/>
> <br/>
> You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. <br/>
>  <br/>
> 	<br/>
> This endpoint requires being a Getty Images customer to limit your results to only assets that you have a license to use, <br/>
> you need to also include an authorization token in the header of your request. <br/>
> Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.

*Tags:* `Downloads`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `company_downloads` - _optional_ - If specified, returns the list of previously downloaded images for all users in your company. Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.
* `date_from` - _optional_ - If specified, select assets downloaded on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD). 
                Any hour, minute, second values in the request are not used at this time. Date/times in the response are UTC. Default is 30 days prior to date_to.
* `date_to` - _optional_ - If specified, select assets downloaded on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD). 
                Any hour, minute, second values in the request are not used at this time. Date/times in the response are UTC. Default is current date.
* `page` - _optional_ - Identifies page to return. Default is 1.
* `page_size` - _optional_ - Specifies page size. Default is 30, maximum page_size is 100.
* `product_type` - _optional_ - Specifies product type to be included in the previous download results. To get previous iStockPhoto credit downloads, credit_pack must be selected.
    Possible values: easyaccess, editorialsubscription, imagepack, premiumaccess, royaltyfreesubscription.

### Download an image

> Use this endpoint to generate download URLs and related data for images you are authorized to download.<br/>
> <br/>
> Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.<br/>
> <br/>
> The download limit for a given download period is covered in your product agreement established with Getty Images.<br/>
> <br/>
> You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. <br/>
> <br/>
> ## Auto Downloads<br/>
> The `auto_download` request query parameter specifies whether to automatically download the image.<br/>
> <br/>
> If the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).<br/>
> <br/>
> Client Request:<br/>
> <br/>
> ```<br/>
> https://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=true<br/>
> ```<br/>
> <br/>
> Server Response:<br/>
> <br/>
> ```<br/>
> HTTP/1.1 303 See Other<br/>
> Location: https://delivery.gettyimages.com/...<br/>
> ```<br/>
> <br/>
> If the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the image. <br/>
> <br/>
> Client Request:<br/>
> <br/>
> ```<br/>
> https://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=false<br/>
> ```<br/>
> <br/>
> Server Response:<br/>
> <br/>
> ```<br/>
> HTTP/1.1 200 OK<br/>
> {<br/>
> 	"uri": "https://delivery.gettyimages.com/..."<br/>
> }<br/>
> ```

*Tags:* `Downloads`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `id` - _required_ - <remarks>
                    Id of image to download.
                </remarks>
* `auto_download` - _optional_ - <remarks>
                    Specifies whether to auto-download the image. If true is specified, a 303 SeeOther status is returned with a
                    Location header set to the location of the image.
                    If false is specified, the download URI will be returned in the response message.
                </remarks>
* `file_type` - _optional_ - <remarks>
                    File Type expressed with three character file extension.
                </remarks>
    Possible values: eps, jpg.
* `height` - _optional_ - <remarks>
                    Specifies the pixel height of the particular image to download.
                    Available heights can be found in the images/{ids} response for the specific image.
                    If left blank, it will return the largest available size.
                </remarks>
* `product_id` - _optional_ - <remarks>
                    Identifier of the instance for the selected product offering type.
                </remarks>
* `product_type` - _optional_ - <remarks>
                    Product type.
                </remarks>
    Possible values: easyaccess, editorialsubscription, imagepack, premiumaccess, royaltyfreesubscription.
* `use_team_credits` - _optional_ - Specifies whether to download the image with iStock Team Credits. Only applicable to iStock API keys authenticated with a user that has Team Credits. Blank is the same as False.

### Download a video

> Use this endpoint to generate download URLs and related data for videos you are authorized to download.<br/>
> <br/>
> Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.<br/>
> <br/>
> The download limit for a given download period is covered in your product agreement established with Getty Images.<br/>
> <br/>
> You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. <br/>
> <br/>
> ## Auto Downloads<br/>
> The `auto_download` request query parameter specifies whether to automatically download the video.<br/>
> <br/>
> If the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).<br/>
> <br/>
> Client Request:<br/>
> <br/>
> ```<br/>
> https://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=true<br/>
> ```<br/>
> <br/>
> Server Response:<br/>
> <br/>
> ```<br/>
> HTTP/1.1 303 See Other<br/>
> Location: https://delivery.gettyimages.com/...<br/>
> ```<br/>
> <br/>
> If the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the video. <br/>
> <br/>
> Client Request:<br/>
> <br/>
> ```<br/>
> https://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=false<br/>
> ```<br/>
> <br/>
> Server Response:<br/>
> <br/>
> ```<br/>
> HTTP/1.1 200 OK<br/>
> {<br/>
> 	"uri": "https://delivery.gettyimages.com/..."<br/>
> }<br/>
> ```

*Tags:* `Downloads`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `id` - _required_ - <remarks>
                    Id of video to download.
                </remarks>
* `auto_download` - _optional_ - <remarks>
                    Specifies whether to auto-download the video. If true is specified, a 303 SeeOther status is returned with a
                    Location header set to the location of the video.
                    If false is specified, the download URI will be returned in the response message.
                </remarks>
* `product_id` - _optional_ - <remarks>
                    Identifier of the instance for the selected product offering type.
                </remarks>
* `size` - _optional_ - Specifies the size to be downloaded.
* `use_team_credits` - _optional_ - Specifies whether to download the image with iStock Team Credits. Only applicable to iStock API keys authenticated with a user that has Team Credits. Blank is the same as False.

### Get metadata for multiple events

> This endpoint returns the detailed event metadata for all specified events. Getty Images news, sports and entertainment photographers and<br/>
> videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with <br/>
> an event, are assigned the same EventID. EventIDs are part of the meta-data returned in SearchForImages Results. Only content <br/>
> produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) <br/>
> will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as <br/>
> "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week". <br/>
> <br/>
> You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.

*Tags:* `Events`

#### Input Parameters
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `Authorization` - _optional_ - Provide access token in the format of 'Bearer {token}'.
* `fields` - _optional_ - A comma separated list of fields to return in the response.
* `ids` - _optional_ - A comma separated list of event ids.

### Get metadata for a single event

> This endpoint returns the detailed event metadata for a specified event. Getty Images news, sports and entertainment <br/>
> photographers and videographers cover editorially relevant events occurring around the world.  <br/>
> All images or video clips produced in association with an event, are assigned the same EventID. <br/>
> EventIDs are part of the meta-data returned in SearchForImages Results. Only content produced under a Getty Images <br/>
> brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be <br/>
> consistently assigned an EventID. The Event framework may also be used to group similar content, such as <br/>
> "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week". <br/>
> <br/>
> You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html)<br/>
> page for more information on how to sign up for an API key.

*Tags:* `Events`

#### Input Parameters
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `Authorization` - _optional_ - Provide access token in the format of 'Bearer {token}'.
* `id` - _required_ - An event id.
* `fields` - _optional_ - A comma separated list of fields to return in the response.

### Get metadata for multiple images by supplying multiple image ids

> This endpoint returns the detailed image metadata for all specified images. Due to a wide variety of available image resolutions,<br/>
> the images are grouped into a handful of size categories for simplicity. <br/>
> <br/>
> You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) <br/>
> page for more information on how to sign up for an API key. <br/>
> <br/>
> ## Working with Fields Sets<br/>
> <br/>
> Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:<br/>
> <br/>
> #### Summary Fields Set<br/>
> <br/>
> The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build <br/>
> search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "images":<br/>
>     [<br/>
>         "artist",<br/>
>         "asset_family",<br/>
>         "caption",<br/>
>         "collection_code",<br/>
>         "collection_id",<br/>
>         "collection_name",<br/>
>         "license_model",<br/>
>         "max_dimensions",<br/>
>         "title"<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> #### Detail Fields Set<br/>
> <br/>
> The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a <br/>
> detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "images":<br/>
>     [<br/>
>         "allowed_use",<br/>
>         "artist", <br/>
>         "artist_title", <br/>
>         "asset_family",<br/>
>         "call_for_image",<br/>
>         "caption", <br/>
>         "city",<br/>
>         "collection_code",<br/>
>         "collection_id", <br/>
>         "collection_name",<br/>
>         "color_type", <br/>
>         "copyright", <br/>
>         "country", <br/>
>         "credit_line", <br/>
>         "date_created", <br/>
>         "date_submitted",<br/>
>         "download_sizes", <br/>
>         "editorial_segments",<br/>
>         "event_ids",<br/>
>         "graphical_style",<br/>
>         "license_model",<br/>
>         "max_dimensions",<br/>
>         "orientation",<br/>
>         "product_types",<br/>
>         "quality_rank",<br/>
>         "referral_destinations",<br/>
>         "state_province", <br/>
>         "title"<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> #### Display Fields Set<br/>
> <br/>
> The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution<br/>
> files that are most frequently used to build a UI displaying search results. The following fields are provided for every image <br/>
> in your result set when you include **display_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "images":<br/>
>     [<br/>
>         "display_sizes": <br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ]<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> ## Request Usage Considerations<br/>
> <br/>
> - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.

*Tags:* `Images`

#### Input Parameters
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `Authorization` - _optional_ - Provide access token in the format of 'Bearer {token}'.
* `ids` - _required_ - Specifies one or more image ids to return. Use comma delimiter when requesting multiple ids.
* `fields` - _optional_ - Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field are estimates.

### Get metadata for a single image by supplying one image id

> This endpoint returns the detailed image metadata for a specified image. Due to a wide variety of available image resolutions, <br/>
> the images are grouped into a handful of size categories for simplicity. <br/>
> <br/>
> You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) <br/>
> page for more information on how to sign up for an API key. <br/>
>  <br/>
> ## Working with Fields Sets<br/>
> <br/>
> Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:<br/>
> <br/>
> #### Summary Fields Set<br/>
> <br/>
> The **summary_set** query string parameter fields value represents a small batch of metadata fields that<br/>
> are often used to build search response results. The following fields are provided for every image in your<br/>
> result set when you include **summary_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "images":<br/>
>     [<br/>
>         "artist",<br/>
>         "asset_family",<br/>
>         "caption",<br/>
>         "collection_code",<br/>
>         "collection_id",<br/>
>         "collection_name",<br/>
>         "license_model",<br/>
>         "max_dimensions",<br/>
>         "title"<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> #### Detail Fields Set<br/>
> <br/>
> The **detail_set** query string parameter fields value represents a large batch of metadata fields that are <br/>
> often used to build a detailed view of images. The following fields are provided for every image in your <br/>
> result set when you include **detail_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "images":<br/>
>     [<br/>
>         "allowed_use",<br/>
>         "artist", <br/>
>         "artist_title", <br/>
>         "asset_family",<br/>
>         "call_for_image",<br/>
>         "caption", <br/>
>         "city",<br/>
>         "collection_code",<br/>
>         "collection_id", <br/>
>         "collection_name",<br/>
>         "color_type", <br/>
>         "copyright", <br/>
>         "country", <br/>
>         "credit_line", <br/>
>         "date_created", <br/>
>         "date_submitted",<br/>
>         "download_sizes", <br/>
>         "editorial_segments",<br/>
>         "event_ids",<br/>
>         "graphical_style",<br/>
>         "license_model",<br/>
>         "max_dimensions",<br/>
>         "orientation",<br/>
>         "product_types",<br/>
>         "quality_rank",<br/>
>         "referral_destinations",<br/>
>         "state_province", <br/>
>         "title"<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> #### Display Fields Set<br/>
> <br/>
> The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low<br/>
> resolution files that are most frequently used to build a UI displaying search results. The following fields are provided <br/>
> for every image in your result set when you include **display_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "images":<br/>
>     [<br/>
>         "display_sizes": <br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ]<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> ## Request Usage Considerations<br/>
> <br/>
> - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.

*Tags:* `Images`

#### Input Parameters
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `Authorization` - _optional_ - Provide access token in the format of 'Bearer {token}'.
* `id` - _required_ - An image id. For more than one image please use the /v3/images endpoint.
* `fields` - _optional_ - Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field are estimates.

### Search for images similar to an image

> This endpoint will search our asset database for images similar to the specified asset id. Due to a wide variety of available <br/>
> image resolutions, the images are grouped into a handful of size categories for simplicity. <br/>
> <br/>
> You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) <br/>
> page for more information on how to sign up for an API key. <br/>
> <br/>
> ## Working with Fields Sets<br/>
> <br/>
> Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:<br/>
> <br/>
> #### Summary Fields Set<br/>
> <br/>
> The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build<br/>
> search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "images":<br/>
>     [<br/>
>         "asset_family",<br/>
>         "caption",<br/>
>         "collection_code",<br/>
>         "collection_id",<br/>
>         "collection_name",<br/>
>         "display_sizes": <br/>
>         [<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ]<br/>
>         "license_model",<br/>
>         "max_dimensions",<br/>
>         "title"<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> #### Detail Fields Set<br/>
> <br/>
> The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a <br/>
> detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "images":<br/>
>     [<br/>
>         "allowed_use",<br/>
>         "artist",<br/>
>         "asset_family",<br/>
>         "call_for_image",<br/>
>         "caption",<br/>
>         "collection_code",<br/>
>         "collection_id",<br/>
>         "collection_name",<br/>
>         "copyright",<br/>
>         "date_created",<br/>
>         "display_sizes": <br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ],<br/>
>         "editorial_segments",<br/>
>         "event_ids",<br/>
>         "graphical_style",<br/>
>         "license_model",<br/>
>         "max_dimensions",<br/>
>         "orientation",<br/>
>         "product_types",<br/>
>         "quality_rank",<br/>
>         "referral_destinations",<br/>
>         "title"<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> #### Display Fields Set<br/>
> <br/>
> The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files <br/>
> that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result<br/>
> set when you include **display_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "images":<br/>
>     [<br/>
>         "display_sizes": <br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ]<br/>
>     ]<br/>
> }<br/>
> ```

*Tags:* `Images`

#### Input Parameters
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `Authorization` - _optional_ - Provide access token in the format of 'Bearer {token}'.
* `id` - _required_ - Identifies an existing image
* `fields` - _optional_ - Specifies fields to return. Defaults to 'summary_set'.
* `page` - _optional_ - Identifies page to return. Default is 1.
* `page_size` - _optional_ - Specifies page size. Default is 30, maximum page_size is 100.

### Get order metadata

> This endpoint returns detailed order metadata for a specified order.<br/>
> Use of this endpoint requires configuration changes to your API key. <br/>
> Please contact [developersupport@gettyimages.com](mailto:developersupport@gettyimages.com) to learn more.<br/>
> <br/>
> You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html)<br/>
> page for more information on how to sign up for an API key.

*Tags:* `Orders`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `id` - _required_ - An order id.

### Get Products

> This endpoint returns all products available to the username used during authentication. As such, this endpoint requires the use of<br/>
> a fully authorized access_token. The product data can then be used as search filters, restricting results to images from a specific product.<br/>
> <br/>
> You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html)<br/>
> page for more information on how to sign up for an API key.

*Tags:* `Products`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `fields` - _optional_ - Comma separated list of fields. Allows product download requirements to be returned.

### Get Previously Purchased Images and Video

> This endpoint returns a list of all assets purchased on gettyimages.com by the username used for authentication. <br/>
> Use of this endpoint requires configuration changes to your API key. <br/>
> Please contact [developersupport@gettyimages.com](mailto:developersupport@gettyimages.com) to learn more.<br/>
> <br/>
> You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html)<br/>
> page for more information on how to sign up for an API key.

*Tags:* `Purchases`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `date_from` - _optional_ - If specified, retrieves previous purchases on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).
* `date_to` - _optional_ - If specified, retrieves previous purchases on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).
* `page` - _optional_ - Identifies page to return. Default is 1.
* `page_size` - _optional_ - Specifies page size. Default is 75, maximum page_size is 100.

### Get Previously Purchased Images

> This endpoint returns a list of all images purchased on gettyimages.com by the username used for authentication.<br/>
> Use of this endpoint requires configuration changes to your API key. Please contact [developersupport@gettyimages.com](mailto:developersupport@gettyimages.com)<br/>
> to learn more.<br/>
> <br/>
> You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html)<br/>
> page for more information on how to sign up for an API key.

*Tags:* `Purchases`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `date_from` - _optional_ - If specified, retrieves previous purchases on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).
* `date_to` - _optional_ - If specified, retrieves previous purchases on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).
* `page` - _optional_ - Identifies page to return. Default is 1.
* `page_size` - _optional_ - Specifies page size. Default is 75, maximum page_size is 100.

### Search for events

> Use this endpoint to search Getty Images news, sports and entertainment events. Getty Images photographers and videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with an event, are assigned the same EventID. EventIDs are part of the meta-data returned in Search Results. Only content produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week".   <br/>
> <br/>
> You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.<br/>
> <br/>
> <br/>
> You can show different information in the response by specifying values on the "fields" parameter (see details below).<br/>
> You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.

*Tags:* `Search`

#### Input Parameters
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `Authorization` - _optional_ - Provide access token in the format of 'Bearer {token}'.
* `date_from` - _optional_ - Filters to events that start on or after this date. Use ISO 8601 format (e.g., 1999-12-31).
* `date_to` - _optional_ - Filters to events that start on or before this date. Use ISO 8601 format (e.g., 1999-12-31).
* `editorial_segment` - _optional_ - Filters to events with a matching editorial segment.
    Possible values: archival, entertainment, news, publicity, royalty, sport.
* `fields` - _optional_ - Specifies fields to return. Default set is 'id','name','start_date'.
* `page` - _optional_ - Request results starting at a page number (default is 1, maximum is 50).
* `page_size` - _optional_ - Request number of images to return in each page.
* `phrase` - _optional_ - Filters to events related to this phrase

### Search for both creative and editorial images

> Use this endpoint to search over a blend of our contemporary stock photos, illustrations, archival images, editorial photos, illustrations and archival images.  <br/>
> <br/>
> You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.<br/>
> <br/>
> <br/>
> You can show different information in the response by specifying values on the "fields" parameter (see details below).<br/>
> You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.<br/>
> To include your API token in the search request, add it to the headers as a Bearer token (example in curl):<br/>
> <br/>
> 	-H "Authorization: Bearer <your-token>"<br/>
> <br/>
> ## Working with Fields Sets<br/>
> <br/>
> Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:<br/>
> <br/>
> #### Summary Fields Set<br/>
> <br/>
> The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "images": <br/>
>     [<br/>
>         "asset_family",<br/>
>         "caption",<br/>
>         "collection_code",<br/>
>         "collection_id",<br/>
>         "collection_name",<br/>
>         "display_sizes": <br/>
>         [<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ],<br/>
>         "license_model",<br/>
>         "max_dimensions",<br/>
>         "title"<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> #### Detail Fields Set<br/>
> <br/>
> The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of images. <br/>
> The following fields are provided for every image in your result set when you include **detail_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "images": <br/>
>     [<br/>
>         "allowed_use",<br/>
>         "artist",<br/>
>         "asset_family",<br/>
>         "call_for_image",<br/>
>         "caption",<br/>
>         "collection_code",<br/>
>         "collection_id",<br/>
>         "collection_name",<br/>
>         "copyright",<br/>
>         "date_created",<br/>
>         "display_sizes": <br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ],<br/>
>         "editorial_segments",<br/>
>         "event_ids",<br/>
>         "graphical_style",<br/>
>         "license_model",<br/>
>         "max_dimensions",<br/>
>         "orientation",<br/>
>         "product_types",<br/>
>         "quality_rank",<br/>
>         "referral_destinations",<br/>
>         "title"<br/>
>     ]<br/>
> ]<br/>
> ```<br/>
> <br/>
> #### Display Fields Set<br/>
> <br/>
> The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most <br/>
> frequently used to build a UI displaying search results. The following fields are provided for every image in your result set when you include **display_set**<br/>
> in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "images": <br/>
>     [<br/>
>         "display_sizes": <br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ]<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> ## Request Usage Considerations<br/>
> <br/>
> - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.

*Tags:* `Search`

#### Input Parameters
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `Authorization` - _optional_ - Provide access token in the format of 'Bearer {token}'.
* `age_of_people` - _optional_ - Filter based on the age of individuals in an image.
* `artists` - _optional_ - Search for images by specific artists (free-text, comma-separated list of artists).
* `collection_codes` - _optional_ - Filter by collection codes (comma-separated list). Include or exclude based on collections_filter_type.
* `collections_filter_type` - _optional_ - Provides searching based on specified collection(s).
    Possible values: include, exclude.
* `color` - _optional_ - Filter based on predominant color in an image. Use 6 character hexidecimal format (e.g., #002244). Note: when specified, results will not contain editorial images.
* `compositions` - _optional_ - Filter based on image composition.
* `embed_content_only` - _optional_ - Restrict search results to embeddable images. The default is false.
* `ethnicity` - _optional_ - Filter search results based on the ethnicity of individuals in an image.
* `event_ids` - _optional_ - Filter based on specific events
* `exclude_nudity` - _optional_ - Excludes images containing nudity. The default is false.
* `fields` - _optional_ - Specifies fields to return. Defaults to 'summary_set'.
* `file_types` - _optional_ - Return only images having a specific file type.
* `graphical_styles` - _optional_ - Filter based on graphical style of the image.
* `graphical_styles_filter_type` - _optional_ - Provides searching based on specified graphical style(s).
    Possible values: include, exclude.
* `keyword_ids` - _optional_ - Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
* `license_models` - _optional_ - Specifies the image licensing model(s).
* `minimum_size` - _optional_ - Filter based on minimum size requested.
    Possible values: x_small, small, medium, large, x_large, xx_large, vector.
* `number_of_people` - _optional_ - Filter based on the number of people in the image.
* `orientations` - _optional_ - Return only images with selected aspect ratios.
* `page` - _optional_ - Request results starting at a page number (default is 1).
* `page_size` - _optional_ - Request number of images to return in each page.
* `phrase` - _optional_ - Search images using a search phrase.
* `product_types` - _optional_ - Filter images to those from one of your product types. 
                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription. 
                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. 
                    For example, some users may have more than one premiumaccess product, so the product_types value would be premiumaccess:1234. 
                    Product ID can be obtained from the GET /products response.
* `sort_order` - _optional_ - Select sort order of results.
    Possible values: best_match, most_popular, newest, random.
* `specific_people` - _optional_ - Return only images associated with specific people (using a comma-delimited list).

### Search for creative images only

> Use this endpoint to search our contemporary stock photos, illustrations and archival images.<br/>
> <br/>
> You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) <br/>
> page for more information on how to sign up for an API key. <br/>
>  <br/>
> You can show different information in the response by specifying values on the "fields" parameter (see details below).<br/>
> You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.<br/>
> <br/>
> ## Working with Fields Sets<br/>
> <br/>
> Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:<br/>
> <br/>
> #### Summary Fields Set<br/>
> <br/>
> The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to <br/>
> build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "images": <br/>
>     [<br/>
>         "asset_family",<br/>
>         "caption",<br/>
>         "collection_code",<br/>
>         "collection_id",<br/>
>         "collection_name",<br/>
>         "display_sizes": <br/>
>         [<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ],<br/>
>         "license_model",<br/>
>         "max_dimensions",<br/>
>         "title"<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> #### Detail Fields Set<br/>
> <br/>
> The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to <br/>
> build a detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "images": <br/>
>     [<br/>
>         "allowed_use",<br/>
>         "artist",<br/>
>         "asset_family",<br/>
>         "call_for_image",<br/>
>         "caption",<br/>
>         "collection_code",<br/>
>         "collection_id",<br/>
>         "collection_name",<br/>
>         "copyright",<br/>
>         "date_created",<br/>
>         "display_sizes": <br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ],<br/>
>         "editorial_segments",<br/>
>         "event_ids",<br/>
>         "graphical_style",<br/>
>         "license_model",<br/>
>         "max_dimensions",<br/>
>         "orientation",<br/>
>         "product_types",<br/>
>         "quality_rank",<br/>
>         "referral_destinations",<br/>
>         "title"<br/>
>     ]<br/>
> ]<br/>
> ```<br/>
> <br/>
> #### Display Fields Set<br/>
> <br/>
> The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution<br/>
> files that are most frequently used to build a UI displaying search results. The following fields are provided for every image <br/>
> in your result set when you include **display_set** in your request.<br/>
> <br/>
> ```Go<br/>
> {<br/>
>     "images": <br/>
>     [<br/>
>         "display_sizes": <br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ]<br/>
>     ]<br/>
> }<br/>
> ```

*Tags:* `Search`

#### Input Parameters
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `Authorization` - _optional_ - Provide access token in the format of 'Bearer {token}'.
* `age_of_people` - _optional_ - Filter based on the age of individuals in an image.
* `artists` - _optional_ - Search for images by specific artists (free-text, comma-separated list of artists).
* `collection_codes` - _optional_ - Filter by collection codes (comma-separated list). Include or exclude based on collections_filter_type.
* `collections_filter_type` - _optional_ - Use to include or exclude collections from search.
    Possible values: include, exclude.
* `color` - _optional_ - Filter based on predominant color in an image. Use 6 character hexidecimal format (e.g., #002244).
* `compositions` - _optional_ - Filter based on image composition.
* `embed_content_only` - _optional_ - Restrict search results to embeddable images. The default is false.
* `ethnicity` - _optional_ - Filter search results based on the ethnicity of individuals in an image.
* `exclude_editorial_use_only` - _optional_ - Exclude images that are only available for editorial (non-commercial) use. Default value is false.
* `exclude_nudity` - _optional_ - Excludes images containing nudity. The default is false.
* `facet_fields` - _optional_ - Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.
                   The include_facets parameter must be set to "true" for facets to be returned.
* `facet_max_count` - _optional_ - Specifies the maximum number of facets to return per type. Default is 300.
* `fields` - _optional_ - Specifies fields to return. Defaults to 'summary_set'.
* `file_types` - _optional_ - Return only images having a specific file type.
* `graphical_styles` - _optional_ - Filter based on graphical style of the image.
* `graphical_styles_filter_type` - _optional_ - Provides searching based on specified graphical style(s).
    Possible values: include, exclude.
* `include_facets` - _optional_ - Specifies whether or not to include facets in the result set. Default is "false".
* `keyword_ids` - _optional_ - Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
* `license_models` - _optional_ - Specifies the image licensing model(s).
* `minimum_size` - _optional_ - Filter based on minimum size requested.
    Possible values: x_small, small, medium, large, x_large, xx_large, vector.
* `number_of_people` - _optional_ - Filter based on the number of people in the image.
* `orientations` - _optional_ - Return only images with selected aspect ratios.
* `page` - _optional_ - Request results starting at a page number (default is 1).
* `page_size` - _optional_ - Request number of images to return in each page.
* `phrase` - _optional_ - Search images using a search phrase.
* `product_types` - _optional_ - Filter images to those from one of your product types. 
                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription. 
                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. 
                    For example, some users may have more than one premiumaccess product, so the product_types value would be premiumaccess:1234. 
                    Product ID can be obtained from the GET /products response.
* `sort_order` - _optional_ - Select sort order of results.
    Possible values: best_match, most_popular, newest, random.

### Search for creative images based on url

> Allows searching for similar creative images by passing the URL to an existing image.<br/>
> <br/>
> Before calling the search by image endpoint, an image must be uploaded to a specific AWS S3 bucket. The bucket name is `search-by-image.s3.amazonaws.com`.<br/>
> For example, using cURL:<br/>
> ```sh<br/>
> curl -i -X PUT https://search-by-image.s3.amazonaws.com/my-test-image.jpg -H "Content-Type: image/jpeg" --data-binary "@testimage.jpg"<br/>
> ```<br/>
> <br/>
> Uploads can be overwritten if the names are the same, so using a prefix like the API Key, application name or company name would help keep that<br/>
> from happening.<br/>
> <br/>
> Once the image has been uploaded, use the full URL in the `image_url` parameter, e.g. `image_url=https://search-by-image.s3.amazonaws.com/my-test-image.jpg`.<br/>
> <br/>
> Subsequent searches for the same image can be executed using the `image_fingerprint` that is returned by the inital search.

*Tags:* `Search`

#### Input Parameters
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `Authorization` - _optional_ - Provide access token in the format of 'Bearer {token}'.
* `facet_fields` - _optional_ - Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.
                    The include_facets parameter must be set to "true" for facets to be returned.
* `facet_max_count` - _optional_ - Specifies the maximum number of facets to return per type. Default is 300.
* `fields` - _optional_ - Specifies fields to return. Defaults to 'summary_set'.
* `image_fingerprint` - _optional_ - Specifies the fingerprint of the image to use in the search.
* `image_url` - _optional_ - Specifies the location of the image to use in the search.
* `include_facets` - _optional_ - Specifies whether or not to include facets in the result set. Default is "false".
* `page` - _optional_ - Request results starting at a page number (default is 1).
* `page_size` - _optional_ - Request number of images to return in each page.
* `product_types` - _optional_ - Filter images to those from one of your product types. 
                    Allowed values are easyaccess, imagepack, premiumaccess and royaltyfreesubscription. 
                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. 
                    For example, some users may have more than one premiumaccess product, so the product_types value would be premiumaccess:1234. 
                    Product ID can be obtained from the GET /products response.

### Search for editorial images only

> Use this endpoint to search our editorial stock photos, illustrations and archival images.  Editorial images represent newsworthy events or illustrate matters of general interest, such as news, sport and entertainment and are generally intended for editorial use.<br/>
> <br/>
> You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) <br/>
> page for more information on how to sign up for an API key.<br/>
> <br/>
> You can show different information in the response by specifying values on the "fields" parameter (see details below).<br/>
> You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.<br/>
> To include your API token in the search request, add it to the headers as a Bearer token (example in curl):<br/>
> <br/>
> 	-H "Authorization: Bearer <your-token>"<br/>
> <br/>
> ## Working with Fields Sets<br/>
> <br/>
> Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:<br/>
> <br/>
> #### Summary Fields Set<br/>
> <br/>
> The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "images": <br/>
>     [<br/>
>         "asset_family",<br/>
>         "caption",<br/>
>         "collection_code",<br/>
>         "collection_id",<br/>
>         "collection_name",<br/>
>         "display_sizes": <br/>
>         [<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ],<br/>
>         "license_model",<br/>
>         "max_dimensions",<br/>
>         "title"<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> #### Detail Fields Set<br/>
> <br/>
> The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "images": <br/>
>     [<br/>
>         "allowed_use",<br/>
>         "artist",<br/>
>         "asset_family",<br/>
>         "call_for_image",<br/>
>         "caption",<br/>
>         "collection_code",<br/>
>         "collection_id",<br/>
>         "collection_name",<br/>
>         "copyright",<br/>
>         "date_created",<br/>
>         "display_sizes": <br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ],<br/>
>         "editorial_segments",<br/>
>         "event_ids",<br/>
>         "graphical_style",<br/>
>         "license_model",<br/>
>         "max_dimensions",<br/>
>         "orientation",<br/>
>         "product_types",<br/>
>         "quality_rank",<br/>
>         "referral_destinations",<br/>
>         "title"<br/>
>     ]<br/>
> ]<br/>
> ```<br/>
> <br/>
> #### Display Fields Set<br/>
> <br/>
> The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result set when you include **display_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "images": <br/>
>     [<br/>
>         "display_sizes": <br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ]<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> ## Request Usage Considerations<br/>
> <br/>
> - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.

*Tags:* `Search`

#### Input Parameters
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `Authorization` - _optional_ - Provide access token in the format of 'Bearer {token}'.
* `age_of_people` - _optional_ - Filter based on the age of individuals in an image.
* `artists` - _optional_ - Search for images by specific artists (free-text, comma-separated list of artists).
* `collection_codes` - _optional_ - Filter by collections (comma-separated list of collection codes). Include or exclude based on collections_filter_type.
* `collections_filter_type` - _optional_ - Use to include or exclude collections from search.
    Possible values: include, exclude.
* `compositions` - _optional_ - Filter based on image composition.
* `date_from` - _optional_ - Return only images that are created on or after this date. Use ISO 8601 format (e.g., 1999-12-31).
* `date_to` - _optional_ - Return only images that are created on or before this date. Use ISO 8601 format (e.g., 1999-12-31).
* `editorial_segments` - _optional_ - Return only events with a matching editorial segment.
* `embed_content_only` - _optional_ - Restrict search results to embeddable images. The default is false.
* `entity_uris` - _optional_ - specify linked data entity uri.
* `ethnicity` - _optional_ - Filter search results based on the ethnicity of individuals in an image.
* `event_ids` - _optional_ - Filter based on specific events
* `facet_fields` - _optional_ - Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.
                   The include_facets parameter must be set to "true" for facets to be returned.
* `facet_max_count` - _optional_ - Specifies the maximum number of facets to return per type. Default is 300.
* `fields` - _optional_ - Specifies fields to return. Defaults to 'summary_set'.
* `file_types` - _optional_ - Return only images having a specific file type.
* `graphical_styles` - _optional_ - Filter based on graphical style of the image.
* `graphical_styles_filter_type` - _optional_ - Provides searching based on specified graphical style(s).
    Possible values: include, exclude.
* `include_facets` - _optional_ - Specifies whether or not to include facets in the result set. Default is "false".
* `keyword_ids` - _optional_ - Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
* `minimum_quality_rank` - _optional_ - Filter search results based on minimum quality ranking. Possible values 1, 2, 3 with 1 being best.
* `minimum_size` - _optional_ - Filter based on minimum size requested.
    Possible values: x_small, small, medium, large, x_large, xx_large, vector.
* `number_of_people` - _optional_ - Filter based on the number of people in the image.
* `orientations` - _optional_ - Return only images with selected aspect ratios.
* `page` - _optional_ - Request results starting at a page number (default is 1).
* `page_size` - _optional_ - Request number of images to return in each page.
* `phrase` - _optional_ - Search images using a search phrase.
* `product_types` - _optional_ - Filter images to those from one of your product types. 
                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription. 
                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. 
                    For example, some users may have more than one premiumaccess product, so the product_types value would be premiumaccess:1234. 
                    Product ID can be obtained from the GET /products response.
* `sort_order` - _optional_ - Select sort order of results.
    Possible values: best_match, most_popular, newest, oldest, random.
* `specific_people` - _optional_ - Return only images associated with specific people (using a comma-delimited list).

### Search for both creative and editorial videos

> Use this endpoint to search over a blend of our premium stock, contemporary 4K and HD footage, celebrities, news, newsmakers, entertainment, events and archival videos.<br/>
> <br/>
> You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.<br/>
> <br/>
> <br/>
> You can show different information in the response by specifying values on the "fields" parameter (see details below).<br/>
> You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.<br/>
> <br/>
> ## Working with Fields Sets<br/>
> <br/>
> Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:<br/>
> <br/>
> #### Summary Fields Set<br/>
> <br/>
> The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "videos":<br/>
>     [<br/>
>         "asset_family",<br/>
>         "caption",<br/>
>         "collection_code",<br/>
>         "collection_name",<br/>
>         "display_sizes":<br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ],<br/>
>         "license_model",<br/>
>         "title"<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> #### Detail Fields Set<br/>
> <br/>
> The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "videos":<br/>
>     [<br/>
>         "allowed_use",<br/>
>         "artist",<br/>
>         "asset_family",<br/>
> 		"call_for_image",<br/>
>         "caption",<br/>
>         "clip_length",<br/>
>         "collection_code",<br/>
>         "collection_id",<br/>
>         "collection_name",<br/>
>         "color_type",<br/>
>         "copyright",<br/>
>         "date_created",<br/>
>         "display_sizes":<br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ],<br/>
>         "era",<br/>
>         "license_model",<br/>
>         "mastered_to",<br/>
>         "originally_shot_on",<br/>
>         "product_types",<br/>
>         "shot_speed",<br/>
>         "source",<br/>
>         "title"<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> #### Display Fields Set<br/>
> <br/>
> The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "videos":<br/>
>     [<br/>
>         "display_sizes":<br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ]<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> ## Request Usage Considerations<br/>
> <br/>
> - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.

*Tags:* `Search`

#### Input Parameters
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `Authorization` - _optional_ - Provide access token in the format of 'Bearer {token}'.
* `age_of_people` - _optional_ - Provides filtering according to the age of individuals in a video.
* `collection_codes` - _optional_ - Provides filtering by collection code.
* `collections_filter_type` - _optional_ - Provides searching based on specified collection(s).
    Possible values: include, exclude.
* `editorial_video_types` - _optional_ - Allows filtering by types of video.
* `fields` - _optional_ - Specifies fields to return. Defaults to 'summary_set'.
* `format_available` - _optional_ - Filters according to the digital video format available on a film asset.
    Possible values: sd, hd, 4k.
* `frame_rates` - _optional_ - Provides filtering by video frame rate (frames/second).
* `keyword_ids` - _optional_ - Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
* `license_models` - _optional_ - Specifies the video licensing model(s).
* `page` - _optional_ - Identifies page to return. Default is 1.
* `page_size` - _optional_ - Specifies page size. Default is 30, maximum page_size is 100.
* `phrase` - _optional_ - Free-text search query.
* `product_types` - _optional_ - Filter images to those from one of your product types. 
                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription. 
                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. 
                    For example, some users may have more than one premiumaccess product, so the product_types value would be premiumaccess:1234. 
                    Product ID can be obtained from the GET /products response.
* `release_status` - _optional_ - Allows filtering by type of model release.
    Possible values: release_not_important, fully_released.
* `sort_order` - _optional_ - Allows sorting of results.
    Possible values: best_match, most_popular, newest, oldest, random.
* `specific_people` - _optional_ - Provides filtering by specific peoples' names.

### Search for creative videos

> Use this endpoint to search premium stock video, from archival film to contemporary 4K and HD footage.<br/>
> <br/>
> You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html)<br/>
> page for more information on how to sign up for an API key.<br/>
> <br/>
> You can show different information in the response by specifying values on the "fields" parameter (see details below).<br/>
> You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without<br/>
> being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only <br/>
> assets that you have a license to use, you need to also include an authorization token in the header of your request.<br/>
> Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.<br/>
> <br/>
> ## Working with Fields Sets<br/>
> <br/>
> Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:<br/>
> <br/>
> #### Summary Fields Set<br/>
> <br/>
> The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search<br/>
> response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "videos": <br/>
>     [<br/>
>         "asset_family", <br/>
>         "caption",<br/>
>         "collection_code",<br/>
>         "collection_name",<br/>
>         "display_sizes":<br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ],<br/>
>         "license_model",<br/>
>         "title"<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> #### Detail Fields Set<br/>
> <br/>
> The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a <br/>
> detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "videos": <br/>
>     [<br/>
>         "allowed_use",<br/>
>         "artist",<br/>
>         "asset_family", <br/>
> 		"call_for_image",<br/>
>         "caption", <br/>
>         "clip_length",<br/>
>         "collection_code",<br/>
>         "collection_id",<br/>
>         "collection_name", <br/>
>         "color_type",<br/>
>         "copyright",<br/>
>         "date_created",<br/>
>         "display_sizes":<br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ],<br/>
>         "era",<br/>
>         "license_model",<br/>
>         "mastered_to",<br/>
>         "originally_shot_on",<br/>
>         "product_types",<br/>
>         "shot_speed",<br/>
>         "source",<br/>
>         "title"<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> #### Display Fields Set<br/>
> <br/>
> The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files <br/>
> that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result <br/>
> set when you include **display_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "videos":<br/>
>     [<br/>
>         "display_sizes":<br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ]<br/>
>     ]<br/>
> }<br/>
> ```

*Tags:* `Search`

#### Input Parameters
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `Authorization` - _optional_ - Provide access token in the format of 'Bearer {token}'.
* `age_of_people` - _optional_ - Provides filtering according to the age of individuals in a video.
* `collection_codes` - _optional_ - Provides filtering by collection code.
* `collections_filter_type` - _optional_ - Provides searching based on specified collection(s).
    Possible values: include, exclude.
* `facet_fields` - _optional_ - Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.
                   The include_facets parameter must be set to "true" for facets to be returned.
* `facet_max_count` - _optional_ - Specifies the maximum number of facets to return per type. Default is 300.
* `fields` - _optional_ - Specifies fields to return. Defaults to 'summary_set'.
* `format_available` - _optional_ - Filters according to the digital video format available on a film asset.
    Possible values: sd, hd, 4k.
* `frame_rates` - _optional_ - Provides filtering by video frame rate (frames/second).
* `include_facets` - _optional_ - Specifies whether or not to include facets in the result set. Default is "false".
* `keyword_ids` - _optional_ - Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
* `license_models` - _optional_ - Specifies the video licensing model(s).
* `page` - _optional_ - Identifies page to return. Default is 1.
* `page_size` - _optional_ - Specifies page size. Default is 30, maximum page_size is 100.
* `phrase` - _optional_ - Free-text search query.
* `product_types` - _optional_ - Filter images to those from one of your product types. 
                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription. 
                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. 
                    For example, some users may have more than one premiumaccess product, so the product_types value would be premiumaccess:1234. 
                    Product ID can be obtained from the GET /products response.
* `release_status` - _optional_ - Allows filtering by type of model release.
    Possible values: release_not_important, fully_released.
* `sort_order` - _optional_ - Allows sorting of results.
    Possible values: best_match, most_popular, newest, random.

### Search for editorial videos

> Use this endpoint to search current and archival video clips of celebrities, newsmakers, and events.<br/>
> <br/>
> You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.<br/>
> <br/>
> You can show different information in the response by specifying values on the "fields" parameter (see details below).<br/>
> You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.<br/>
> <br/>
> ## Working with Fields Sets<br/>
> <br/>
> Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:<br/>
> <br/>
> #### Summary Fields Set<br/>
> <br/>
> The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "videos": <br/>
>     [<br/>
>         "asset_family", <br/>
>         "caption",<br/>
>         "collection_code",<br/>
>         "collection_name",<br/>
>         "display_sizes":<br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ],<br/>
>         "license_model",<br/>
>         "title"<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> #### Detail Fields Set<br/>
> <br/>
> The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "videos": <br/>
>     [<br/>
>         "allowed_use",<br/>
>         "artist",<br/>
>         "asset_family", <br/>
> 		"call_for_image",<br/>
>         "caption", <br/>
>         "clip_length",<br/>
>         "collection_code",<br/>
>         "collection_id",<br/>
>         "collection_name", <br/>
>         "color_type",<br/>
>         "copyright",<br/>
>         "date_created",<br/>
>         "display_sizes":<br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ],<br/>
>         "era",<br/>
>         "license_model",<br/>
>         "mastered_to",<br/>
>         "originally_shot_on",<br/>
>         "product_types",<br/>
>         "shot_speed",<br/>
>         "source",<br/>
>         "title"<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> #### Display Fields Set<br/>
> <br/>
> The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "videos":<br/>
>     [<br/>
>         "display_sizes":<br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ]<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> ## Request Usage Considerations<br/>
> <br/>
> - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.

*Tags:* `Search`

#### Input Parameters
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `Authorization` - _optional_ - Provide access token in the format of 'Bearer {token}'.
* `age_of_people` - _optional_ - Provides filtering according to the age of individuals in a video.
* `collection_codes` - _optional_ - Provides filtering by collection code.
* `collections_filter_type` - _optional_ - Provides searching based on specified collection(s).
    Possible values: include, exclude.
* `editorial_video_types` - _optional_ - Allows filtering by types of video.
* `entity_uris` - _optional_ - specify link data entity uri.
* `facet_fields` - _optional_ - Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.
                   The include_facets parameter must be set to "true" for facets to be returned.
* `facet_max_count` - _optional_ - Specifies the maximum number of facets to return per type. Default is 300.
* `fields` - _optional_ - Specifies fields to return. Defaults to 'summary_set'.
* `format_available` - _optional_ - Filters according to the digital video format available on a film asset.
    Possible values: sd, hd, 4k.
* `frame_rates` - _optional_ - Provides filtering by video frame rate (frames/second).
* `include_facets` - _optional_ - Specifies whether or not to include facets in the result set. Default is "false".
* `keyword_ids` - _optional_ - Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
* `page` - _optional_ - Identifies page to return. Default is 1.
* `page_size` - _optional_ - Specifies page size. Default is 30, maximum page_size is 100.
* `phrase` - _optional_ - Free-text search query.
* `product_types` - _optional_ - Filter images to those from one of your product types. 
                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription. 
                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. 
                    For example, some users may have more than one premiumaccess product, so the product_types value would be premiumaccess:1234. 
                    Product ID can be obtained from the GET /products response.
* `release_status` - _optional_ - Allows filtering by type of model release.
    Possible values: release_not_important, fully_released.
* `sort_order` - _optional_ - Allows sorting of results.
    Possible values: best_match, most_popular, newest, oldest, random.
* `specific_people` - _optional_ - Allows filtering by specific peoples' names.

### Report usage of assets via a batch format.

> # Report Usage<br/>
> <br/>
> Use this endpoint to report the usages of a set of assets. The count of assets submitted in a single batch to this endpoint is limited to 1000. Note that all asset Ids specified must be valid or the operation will fail causing no usages to be recorded. In this case, you will need to remove the invalid asset Ids from the query request and re-submit the query.<br/>
> <br/>
> ##  Quickstart<br/>
> <br/>
> You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.<br/>
> Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. <br/>
> <br/>
> _Note_: Date of use can be in any unambiguous date format.

*Tags:* `Usage`

#### Input Parameters
* `Authorization` - _required_ - Provide access token in the format of 'Bearer {token}'.
* `id` - _required_ - Specifies a unique batch transaction id to identify the report.

### Get metadata for multiple videos by supplying multiple video ids

> Use this endpoint to return detailed video metadata for all the specified video ids.<br/>
> <br/>
> You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.<br/>
> <br/>
> You can show different information in the response by specifying values on the "fields" parameter (see details below).<br/>
> You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.<br/>
> <br/>
> ## Working with Fields Sets<br/>
> <br/>
> Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:<br/>
> <br/>
> #### Summary Fields Set<br/>
> <br/>
> The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "videos": <br/>
>     [<br/>
>         "asset_family",<br/>
>         "caption",<br/>
>         "collection_code",<br/>
>         "collection_name",<br/>
>         "display_sizes":<br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ],<br/>
>         "license_model",<br/>
>         "title"<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> #### Detail Fields Set<br/>
> <br/>
> The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "videos": <br/>
>     [<br/>
>         "allowed_use",<br/>
>         "artist",<br/>
>         "asset_family",<br/>
> 		"call_for_image",<br/>
>         "caption",<br/>
>         "clip_length",<br/>
>         "collection_code",<br/>
>         "collection_id",<br/>
>         "collection_name",<br/>
>         "color_type",<br/>
>         "copyright",<br/>
>         "date_created",<br/>
>         "display_sizes":<br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ],<br/>
>         "download_sizes",<br/>
>         "era",<br/>
>         "license_model",<br/>
>         "mastered_to",<br/>
>         "originally_shot_on",<br/>
>         "product_types",<br/>
>         "shot_speed",<br/>
>         "source",<br/>
>         "title"<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> #### Display Fields Set<br/>
> <br/>
> The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "videos":<br/>
>     [<br/>
>         "display_sizes": <br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ]<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> ## Request Usage Considerations<br/>
> <br/>
> - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.

*Tags:* `Videos`

#### Input Parameters
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `Authorization` - _optional_ - Provide access token in the format of 'Bearer {token}'.
* `ids` - _required_ - Specifies one or more video ids to return. Use comma delimiter when requesting multiple ids.
* `fields` - _optional_ - Specifies fields to return. Defaults to 'summary_set'.

### Get metadata for a single video by supplying one video id

> Use this endpoint to return detailed video metadata for the specified video id.<br/>
> <br/>
> You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.<br/>
> <br/>
> You can show different information in the response by specifying values on the "fields" parameter (see details below).<br/>
> You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.<br/>
> <br/>
> ## Working with Fields Sets<br/>
> <br/>
> Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:<br/>
> <br/>
> #### Summary Fields Set<br/>
> <br/>
> The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "videos":<br/>
>     [<br/>
>         "asset_family",<br/>
>         "caption",<br/>
>         "collection_code",<br/>
>         "collection_name",<br/>
>         "display_sizes":<br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ],<br/>
>         "license_model",<br/>
>         "title"<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> #### Detail Fields Set<br/>
> <br/>
> The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "videos":<br/>
>     [<br/>
>         "allowed_use",<br/>
>         "artist",<br/>
>         "asset_family",<br/>
> 		"call_for_image",<br/>
>         "caption",<br/>
>         "clip_length",<br/>
>         "collection_code",<br/>
>         "collection_id",<br/>
>         "collection_name",<br/>
>         "color_type",<br/>
>         "copyright",<br/>
>         "date_created",<br/>
>         "display_sizes":<br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ],<br/>
>         "download_sizes",<br/>
>         "era",<br/>
>         "license_model",<br/>
>         "mastered_to",<br/>
>         "originally_shot_on",<br/>
>         "product_types",<br/>
>         "shot_speed",<br/>
>         "source",<br/>
>         "title"<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> #### Display Fields Set<br/>
> <br/>
> The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.<br/>
> <br/>
> ```<br/>
> {<br/>
>     "videos":<br/>
>     [<br/>
>         "display_sizes":<br/>
>         [<br/>
>             {<br/>
>                 "name": "comp"<br/>
>             },<br/>
>             {<br/>
>                 "name": "preview"<br/>
>             },<br/>
>             {<br/>
>                 "name": "thumb"<br/>
>             }<br/>
>         ]<br/>
>     ]<br/>
> }<br/>
> ```<br/>
> <br/>
> ## Request Usage Considerations<br/>
> <br/>
> - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.

*Tags:* `Videos`

#### Input Parameters
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `Authorization` - _optional_ - Provide access token in the format of 'Bearer {token}'.
* `id` - _required_ - A video id. For more than one video please use the /v3/video endpoint.
* `fields` - _optional_ - comma delimited list of fields to retrive for the video

### Get videos similar to a video by supplying one video id

*Tags:* `Videos`

#### Input Parameters
* `Accept-Language` - _optional_ - Provide a header to specify the language of result values.
* `Authorization` - _optional_ - Provide access token in the format of 'Bearer {token}'.
* `id` - _required_ - A video id.
* `fields` - _optional_ - comma delimited list of fields to retrive for the videos
* `page` - _optional_ - Identifies page to return. Default is 1.
* `page_size` - _optional_ - Specifies page size. Default is 30, maximum page_size is 100.

## License

**flow**ground :- Telekom iPaaS / gettyimages-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
