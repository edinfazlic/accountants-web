export class RoutesConstant {

  // Params
  public static ACCOUNTANT_ID = 'id';

  // Route roots
  public static ACCOUNTANTS_ROUTE = 'accountants';

  // Routes
  public static ACCOUNTANTS_LIST = RoutesConstant.ACCOUNTANTS_ROUTE;
  public static ACCOUNTANTS_DETAILS = RoutesConstant.ACCOUNTANTS_ROUTE + '/:' + RoutesConstant.ACCOUNTANT_ID;
}
