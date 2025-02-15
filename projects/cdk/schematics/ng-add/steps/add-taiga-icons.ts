import {JsonArray} from '@angular-devkit/core';
import {Rule, Tree} from '@angular-devkit/schematics';
import {updateWorkspace} from '@schematics/angular/utility/workspace';

import {getProjectTargetOptions} from '../../utils/get-project-target-options';
import {getProjects} from '../../utils/get-projects';
import {TuiSchema} from '../schema';

const ICON_ASSETS = {
    glob: '**/*',
    input: 'node_modules/@taiga-ui/icons/src',
    output: 'assets/taiga-ui/icons',
};

export function addTaigaIcons(options: TuiSchema): Rule {
    return (_: Tree) => addTaigaAssetsToAngularJson(options);
}

export function addTaigaAssetsToAngularJson(options: TuiSchema): Rule {
    return updateWorkspace(workspace => {
        const project = getProjects(options, workspace)[0];

        if (project) {
            const targetOptions = getProjectTargetOptions(project, 'build');
            const assets = targetOptions.assets as JsonArray | undefined;

            targetOptions.assets = assets ? [...assets, ICON_ASSETS] : [ICON_ASSETS];
        }
    });
}
