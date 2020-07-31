/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
import { toTypeNameFormat } from '@sap-cloud-sdk/core';
import { createLogger } from '@sap-cloud-sdk/util';
import { ServiceNameFormatter } from '../../service-name-formatter';
import { VdmFunctionImportBase } from '../../vdm-types';
import { SwaggerPath } from '../../swagger-parser/swagger-types';
import { functionImportDescription } from '../description-util';
import { EdmxNamed, EdmxParameter } from '../../edmx-parser/common';
import { getParameter } from './action-function-parameters';

const logger = createLogger({
  package: 'generator',
  messageContext: 'function-import'
});

export function transformFunctionImportBase<T extends EdmxNamed>(
  edmxFunctionImport: T,
  edmxParameters: EdmxParameter[],
  swaggerDefinition: SwaggerPath | undefined,
  formatter: ServiceNameFormatter
): VdmFunctionImportBase {
  const functionName = formatter.originalToFunctionImportName(
    edmxFunctionImport.Name
  );
  const functionImport = {
    originalName: edmxFunctionImport.Name,
    name: functionName,
    parametersTypeName: toTypeNameFormat(`${functionName}Parameters`)
  };

  const parameters = getParameter(
    edmxFunctionImport,
    edmxParameters,
    swaggerDefinition,
    formatter
  );

  return {
    ...functionImport,
    parameters,
    description: functionImportDescription(
      swaggerDefinition,
      functionImport.originalName
    )
  };
}
