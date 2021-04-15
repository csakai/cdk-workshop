import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export interface HitCounterProps {
  /** the func in which we want to count url hits **/
  downstream: lambda.IFunction;
}

export class HitCounter extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: HitCounterProps) {
    super(scope, id);

  }
}
