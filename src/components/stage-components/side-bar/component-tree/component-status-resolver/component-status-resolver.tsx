import React from 'react';
import { ComponentStatus } from '../component-status/component-status';
import { ComponentStatus as StatusProps } from '../../../../../extensions/workspace/workspace-component/component-status';
import styles from './component-status-resolver.module.scss';

export type ComponentStatusResolverProps = {
  status?: StatusProps;
};

export function ComponentStatusResolver({ status }: ComponentStatusResolverProps) {
  console.log('status', status);
  if (!status) return null;
  if (status.isNew) {
    return (
      <div className={styles.statusLine}>
        <ComponentStatus status="new" />
        {/* <ComponentStatus status="error" /> */}
      </div>
    );
  }
  return (
    <div>
      {status.isModified && <ComponentStatus status="modified" />}
      {status.isStaged && <ComponentStatus status="staged" />}
      {/* {status.isError && <ComponentStatus status="error" />} */}
    </div>
  );
}
