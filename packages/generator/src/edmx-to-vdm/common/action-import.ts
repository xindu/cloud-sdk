/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
import { toTypeNameFormat } from '@sap-cloud-sdk/core';
import { createLogger } from '@sap-cloud-sdk/util';
import { ServiceNameFormatter } from '../../service-name-formatter';
import { VdmActionImportBase } from '../../vdm-types';
import { SwaggerPath } from '../../swagger-parser/swagger-types';
import { actionImportDescription } from '../description-util';
import { EdmxNamed, EdmxParameter } from '../../edmx-parser/common';
import { getParameter } from './action-function-parameters';

const logger = createLogger({
  package: 'generator',
  messageContext: 'function-import'
});

export function transformFunctionImportBase<T extends EdmxNamed>(
  edmxActionImport: T,
  edmxParameters: EdmxParameter[],
  swaggerDefinition: SwaggerPath | undefined,
  formatter: ServiceNameFormatter
): VdmActionImportBase {
  const actionName = formatter.originalToActionImportName(
    edmxActionImport.Name
  );
  const actiononImport = {
    originalName: edmxActionImport.Name,
    name: actionName,
    parametersTypeName: toTypeNameFormat(`${actionName}Parameters`)
  };

  const parameters = getParameter(
    edmxActionImport,
    edmxParameters,
    swaggerDefinition,
    formatter
  );

  return {
    ...actiononImport,
    parameters,
    description: actionImportDescription(
      swaggerDefinition,
      actiononImport.originalName
    )
  };
}
