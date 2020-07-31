/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */

import { FunctionDeclarationStructure, StructureKind } from 'ts-morph';
import {
  VdmActionImport,
  VdmFunctionImport,
  VdmServiceMetadata
} from '../vdm-types';
import { responseTransformer } from './response-transformer-function';

const parameterName = 'parameters';

export function actionImportFunction(
  actionImport: VdmActionImport,
  service: VdmServiceMetadata
): FunctionDeclarationStructure {
  return {
    kind: StructureKind.Function,
    name: actionImport.name,
    isExported: true,
    parameters: [
      {
        name: parameterName,
        type: actionImport.parametersTypeName
      }
    ],
    returnType: `ActionImportRequestBuilder<${
      actionImport.parametersTypeName
    }, ${actionImport.returnType.returnType}${
      actionImport.returnType.isCollection ? '[]' : ''
    }>`,

    statements: getActionImportStatements(actionImport, service),
    docs: [
      [
        `${actionImport.description}\n`,
        '@param parameters - Object containing all parameters for the action import.',
        '@returns A request builder that allows to overwrite some of the values and execute the resultng request.'
      ].join('\n')
    ]
  };
}

function getActionImportStatements(
  actionImport: VdmFunctionImport,
  service: VdmServiceMetadata
): string {
  const context = actionImport.parameters
    ? actionImport.parameters.reduce((cumulator, currentParameters) => {
        if (cumulator !== 'const params = {\n') {
          cumulator += ',\n';
        }
        cumulator += `${currentParameters.parameterName}: new ActionImportParameter('${currentParameters.originalName}', '${currentParameters.edmType}', ${parameterName}.${currentParameters.parameterName})`;
        return cumulator;
      }, 'const params = {\n') + '\n}'
    : '{}';

  const parameters = getActionImportRequestBuilderArguments(
    actionImport,
    service
  );
  const returnStatement = `return new FunctionImportRequestBuilder(${parameters.join(
    ', '
  )});`;

  return context + '\n\n' + returnStatement;
}

function getActionImportRequestBuilderArguments(
  functionImport: VdmFunctionImport,
  service: VdmServiceMetadata
): string[] {
  return [
    `'${service.servicePath}'`,
    `'${functionImport.originalName}'`,
    `(data) => ${responseTransformer(functionImport.returnType)}(data, ${
      functionImport.returnType.builderFunction
    })`,
    'params'
  ];
}
