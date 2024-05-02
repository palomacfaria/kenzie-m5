//classe auxiliar pra facilitar a leitura dos códigos do statuscode e seu respectivo significado

class HttpStatusCode{
    //2xx
    HTTP_200_OK = 200;
    HTTP_201_CREATED = 201;
    HTTP_202_ACCEPTED = 202;
    //...


    //4xx
    HTTP_400_BAND_REQUEST = 400;
    HTTP_401_UNAUTHORIZED = 401;
    HTTP_403_FORBIDEN = 403;
    HTTP_404_NOT_FOUND = 404;
    //...


    //5xx
    HTTP_500_BAND_INTERNAL_SERVER_ERROR = 500;
    //...
};

export const status = new HttpStatusCode();